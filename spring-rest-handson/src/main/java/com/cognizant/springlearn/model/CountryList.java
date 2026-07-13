package com.cognizant.springlearn.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

/**
 * Maps to the root <countries> element in country.xml so the whole file
 * can be unmarshalled into a List<Country> in one shot.
 */
@XmlRootElement(name = "countries")
@XmlAccessorType(XmlAccessType.FIELD)
public class CountryList {

    @XmlElement(name = "country")
    private List<Country> country = new ArrayList<>();

    public List<Country> getCountry() {
        return country;
    }

    public void setCountry(List<Country> country) {
        this.country = country;
    }
}
