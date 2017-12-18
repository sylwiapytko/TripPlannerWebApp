package com.projekt.ai.bll.model.book;

import com.projekt.ai.dal.domain.book.Category;
import lombok.Builder;
import lombok.Data;

/**
 * Created by Lenovo on 2017-11-08.
 */

@Data
@Builder
public class BookDetailedDto {
    private Long id;
    private Category category;
    private String title;
    private String author;
    private long isbn;
    private String publisher;
    private int yearOfPublish;
    private String placeOfPublish;
    private String typeOfCover;
    private String description;
    private int numberOfAvailablePieces;
    private Double price;
}
