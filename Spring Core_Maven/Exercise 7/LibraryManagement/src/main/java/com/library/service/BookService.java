package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private final BookRepository bookRepository;   // set via constructor injection
    private String libraryName;                    // set via setter injection

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void setLibraryName(String libraryName) {
        this.libraryName = libraryName;
    }

    public void addBook(String bookName) {
        System.out.println("[" + libraryName + "] adding book");
        bookRepository.addBook(bookName);
    }

    public void removeBook(String bookName) {
        System.out.println("[" + libraryName + "] removing book");
        bookRepository.removeBook(bookName);
    }
}
