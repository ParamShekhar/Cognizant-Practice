# Spring REST Hands-on

Solutions for the "Spring REST Hands-on" exercise: HTTP request/response
basics, a Hello World REST service, and a Country REST service (with
MockMVC tests), built with Spring Boot.

## What's implemented

| Endpoint | Method | Description |
|---|---|---|
| `/hello` | GET | Returns `Hello World!!` |
| `/country` | GET | Returns India's details |
| `/countries` | GET | Returns all countries |
| `/countries/{code}` | GET | Returns one country by code (case-insensitive), 404 if not found |

- `CountryService` loads `country.xml` (via JAXB) once at startup.
- `CountryNotFoundException` is annotated with `@ResponseStatus(HttpStatus.NOT_FOUND, reason = "Country not found")`
  so an unknown code automatically produces a 404 JSON error response.
- `SpringLearnApplicationTests` uses MockMVC to verify the controller loads,
  `/country` returns `code=IN, name=India`, `/countries` returns the full
  list, and an unknown code returns 404 with reason "Country not found".

## Project layout

```
src/main/java/com/cognizant/springlearn/
├── SpringLearnApplication.java
├── controller/
│   ├── HelloController.java
│   └── CountryController.java
├── service/
│   ├── CountryService.java
│   └── exception/CountryNotFoundException.java
└── model/
    ├── Country.java
    └── CountryList.java
src/main/resources/
├── application.properties   (server.port=8083)
└── country.xml
src/test/java/com/cognizant/springlearn/
└── SpringLearnApplicationTests.java
```

## Running it

Requires JDK 8+ and Maven (with internet access to Maven Central).

```bash
mvn clean install
mvn spring-boot:run
```

The app starts on **http://localhost:8083**.

Try it:

```bash
curl http://localhost:8083/hello
curl http://localhost:8083/country
curl http://localhost:8083/countries
curl http://localhost:8083/countries/in
curl -i http://localhost:8083/countries/zz   # 404 Country not found
```

## Running the tests

```bash
mvn clean test
```

or in an IDE: right-click `SpringLearnApplicationTests.java` → Run As → JUnit Test.

> Note: This sandbox doesn't have internet access to Maven Central, so the
> build itself hasn't been run here — build it locally where Maven can
> download dependencies (spring-boot-starter-web, spring-boot-starter-oxm,
> spring-boot-starter-test).
