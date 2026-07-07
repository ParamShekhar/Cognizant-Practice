package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.model.CountryList;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.PostConstruct;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import java.io.InputStream;
import java.util.List;

/**
 * Loads the country list from country.xml (once, at startup, via JAXB)
 * and exposes lookup operations used by CountryController.
 */
@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    private List<Country> countries;

    @PostConstruct
    public void init() {
        LOGGER.info("Loading countries from country.xml");
        try (InputStream inputStream = new ClassPathResource("country.xml").getInputStream()) {
            JAXBContext context = JAXBContext.newInstance(CountryList.class);
            Unmarshaller unmarshaller = context.createUnmarshaller();
            CountryList countryList = (CountryList) unmarshaller.unmarshal(inputStream);
            this.countries = countryList.getCountry();
            LOGGER.info("Loaded {} countries", countries.size());
        } catch (Exception e) {
            throw new IllegalStateException("Unable to load country.xml", e);
        }
    }

    /**
     * @return the full list of countries loaded from country.xml
     */
    public List<Country> getAllCountries() {
        return countries;
    }

    /**
     * Finds a country by its code, ignoring case.
     *
     * @param code the country code, e.g. "in" or "IN"
     * @return the matching Country
     * @throws CountryNotFoundException if no country matches the given code
     */
    public Country getCountry(String code) {
        LOGGER.info("Looking up country for code: {}", code);
        if (!StringUtils.hasText(code)) {
            throw new CountryNotFoundException(code);
        }
        return countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException(code));
    }
}
