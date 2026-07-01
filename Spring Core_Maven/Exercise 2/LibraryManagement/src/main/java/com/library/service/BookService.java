package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    // Dependency managed by Spring's IoC container via setter injection
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public BookRepository getBookRepository() {
        return bookRepository;
    }

    public void addBook(String bookName) {
        bookRepository.addBook(bookName);
    }

    public void removeBook(String bookName) {
        bookRepository.removeBook(bookName);
    }
}
