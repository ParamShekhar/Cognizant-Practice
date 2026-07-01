package com.library.service;

import com.library.repository.BookRepository;

/**
 * Service class containing business logic for managing books.
 * Depends on BookRepository for data access.
 */
public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("Adding book: " + title);
        bookRepository.save(title);
    }

    public String getBook(int id) {
        return bookRepository.findBookById(id);
    }
}
