package com.library.repository;

/**
 * Repository class responsible for data access operations
 * related to books in the Library Management System.
 */
public class BookRepository {

    public void save(String bookTitle) {
        System.out.println("Book saved to repository: " + bookTitle);
    }

    public String findBookById(int id) {
        System.out.println("Fetching book with id: " + id);
        return "Sample Book Title";
    }
}
