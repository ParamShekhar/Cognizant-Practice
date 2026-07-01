# LibraryManagement

A basic Spring Framework application demonstrating dependency injection via XML configuration, built for a Library Management use case.

## Project Structure

```
LibraryManagement/
├── pom.xml
├── README.md
├── .gitignore
└── src/
    └── main/
        ├── java/
        │   └── com/
        │       └── library/
        │           ├── MainApp.java
        │           ├── service/
        │           │   └── BookService.java
        │           └── repository/
        │               └── BookRepository.java
        └── resources/
            └── applicationContext.xml
```

## Technologies

- Java 11
- Maven
- Spring Core / Spring Context / Spring Beans 5.3.x

## How It Works

- `BookRepository` handles data access logic (currently simulated with console output).
- `BookService` contains business logic and depends on `BookRepository`, injected via setter injection.
- `applicationContext.xml` wires up both beans using Spring's XML-based configuration.
- `MainApp` loads the `ApplicationContext` and calls methods on `BookService` to verify the wiring works.

## Build & Run

```bash
mvn clean compile
mvn exec:java -Dexec.mainClass="com.library.MainApp"
```

Or build a jar and run it:

```bash
mvn clean package
java -cp target/LibraryManagement.jar:$(mvn dependency:build-classpath -Dmdep.outputFile=/dev/stdout -q) com.library.MainApp
```

## Expected Output

```
Adding book: Effective Java
Book saved to repository: Effective Java
Fetching book with id: 1
Retrieved book: Sample Book Title
```
