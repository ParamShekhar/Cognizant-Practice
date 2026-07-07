package com.library.repository;

public class BookRepository {

    public void addBook(String bookName) {
        System.out.println("Book added to repository: " + bookName);
    }

    public void removeBook(String bookName) {
        System.out.println("Book removed from repository: " + bookName);
    }
}
