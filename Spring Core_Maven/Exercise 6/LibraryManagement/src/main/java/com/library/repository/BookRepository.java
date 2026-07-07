package com.library.repository;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {

    public void addBook(String bookName) {
        System.out.println("Book added to repository: " + bookName);
    }

    public void removeBook(String bookName) {
        System.out.println("Book removed from repository: " + bookName);
    }
}
