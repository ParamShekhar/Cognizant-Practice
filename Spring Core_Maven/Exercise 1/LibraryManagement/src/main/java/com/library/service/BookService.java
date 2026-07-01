package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("BookService: processing add request for " + bookName);
        bookRepository.addBook(bookName);
    }

    public void removeBook(String bookName) {
        System.out.println("BookService: processing remove request for " + bookName);
        bookRepository.removeBook(bookName);
    }
}
