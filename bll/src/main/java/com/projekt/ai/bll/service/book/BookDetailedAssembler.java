package com.projekt.ai.bll.service.book;

import com.projekt.ai.bll.model.book.BookDetailedDto;
import com.projekt.ai.bll.service.MainAssembler;
import com.projekt.ai.dal.domain.book.Book;
import org.springframework.stereotype.Service;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class BookDetailedAssembler extends MainAssembler<Book, BookDetailedDto> {

    @Override
    public BookDetailedDto toDto(Book book) {
        return BookDetailedDto.builder()
                .id(book.getId())
                .author(book.getAuthor())
                .category(book.getCategory())
                .title(book.getTitle())
                .description(book.getDescription())
                .isbn(book.getIsbn())
                .placeOfPublish(book.getPlaceOfPublish())
                .yearOfPublish(book.getYearOfPublish())
                .publisher(book.getPublisher())
                .typeOfCover(book.getTypeOfCover().getName())
                .numberOfAvailablePieces(book.getStock().getNumberOfPieces())
                .price(book.getPrice())
                .build();
    }
}
