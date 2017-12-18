package com.projekt.ai.bll.service.book;

import com.projekt.ai.bll.model.book.BookDetailedDto;
import com.projekt.ai.bll.model.book.BookGeneralDto;
import com.projekt.ai.dal.domain.book.Book;
import com.projekt.ai.dal.domain.book.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookGeneralAssembler bookGeneralAssembler;

    @Autowired
    private BookDetailedAssembler bookDetailedAssembler;

    public List<BookGeneralDto> getBooks(){
        List<Book> all = bookRepository.findAll();
        return bookGeneralAssembler.toDtoList(all);
    }

    public BookDetailedDto getBook(Long id){
        Book byId = bookRepository.findById(id);
        return bookDetailedAssembler.toDto(byId);
    }
}
