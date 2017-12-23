package com.projekt.ai.bll.model.trip;

import com.projekt.ai.dal.domain.book.Category;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;

/**
 * Created by Lenovo on 2017-11-08.
 */

@Data
@Builder
public class TripDto {
    private Long id;
    private String name;
    private String destination;
    private Date date_from;
    private Date date_to;

}
