package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Main class to bootstrap the Spring application context
 * and verify that the configured beans work correctly.
 */
public class MainApp {

    public static void main(String[] args) {
        // Load the Spring application context from applicationContext.xml
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Test the configuration
        bookService.addBook("Effective Java");
        String book = bookService.getBook(1);
        System.out.println("Retrieved book: " + book);
    }
}
