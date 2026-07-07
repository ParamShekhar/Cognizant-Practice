package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    public CountryController() {
        LOGGER.info("CountryController instance created");
    }

    /**
     * REST - Country Web Service
     * URL: /country
     * Returns the India country details.
     */
    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START - getCountryIndia()");
        Country india = countryService.getCountry("IN");
        LOGGER.info("END - getCountryIndia()");
        return india;
    }

    /**
     * REST - Get all countries
     * URL: /countries
     */
    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        LOGGER.info("START - getAllCountries()");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.info("END - getAllCountries()");
        return countries;
    }

    /**
     * REST - Get country based on country code
     * URL: /countries/{code}
     * The country code is matched case-insensitively.
     * Throws CountryNotFoundException (-> HTTP 404) if code is unknown.
     */
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START - getCountry({})", code);
        Country country = countryService.getCountry(code);
        LOGGER.info("END - getCountry({})", code);
        return country;
    }
}
