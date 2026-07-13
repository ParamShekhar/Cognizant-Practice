package com.cognizant.springlearn.service.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Thrown when a requested country code does not exist in country.xml.
 * The @ResponseStatus annotation makes Spring automatically respond
 * with HTTP 404 and the given reason whenever this exception escapes
 * a controller method.
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Country not found")
public class CountryNotFoundException extends RuntimeException {

    public CountryNotFoundException(String code) {
        super("Country not found for code: " + code);
    }
}
