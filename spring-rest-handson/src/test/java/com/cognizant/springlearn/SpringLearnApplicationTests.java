package com.cognizant.springlearn;

import com.cognizant.springlearn.controller.CountryController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.junit.Assert.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class SpringLearnApplicationTests {

    @Autowired
    private CountryController countryController;

    @Autowired
    private MockMvc mvc;

    /**
     * Test loading CountryController - confirms the Spring context wires it up.
     */
    @Test
    public void contextLoads() {
        assertNotNull(countryController);
    }

    /**
     * Invoke the get country service and check the response contains
     * code "IN" and name "India".
     */
    @Test
    public void testGetCountry() throws Exception {
        ResultActions actions = mvc.perform(get("/country"));

        actions.andExpect(status().isOk());
        actions.andExpect(jsonPath("$.code").exists());
        actions.andExpect(jsonPath("$.code").value("IN"));
        actions.andExpect(jsonPath("$.name").exists());
        actions.andExpect(jsonPath("$.name").value("India"));
    }

    /**
     * MockMVC - Test get country service for exceptional scenario.
     * An unknown country code should result in a 404 Not Found response
     * with reason "Country not found".
     */
    @Test
    public void testGetCountryException() throws Exception {
        ResultActions actions = mvc.perform(get("/countries/zz"));

        actions.andExpect(status().isNotFound());
        actions.andExpect(status().reason("Country not found"));
    }

    /**
     * Additional check: /countries returns the full list, including India.
     */
    @Test
    public void testGetAllCountries() throws Exception {
        ResultActions actions = mvc.perform(get("/countries"));

        actions.andExpect(status().isOk());
        actions.andExpect(jsonPath("$[0].code").exists());
    }

    /**
     * Additional check: /countries/{code} is case-insensitive.
     */
    @Test
    public void testGetCountryByCodeCaseInsensitive() throws Exception {
        ResultActions actions = mvc.perform(get("/countries/in"));

        actions.andExpect(status().isOk());
        actions.andExpect(jsonPath("$.code").value("IN"));
    }
}
