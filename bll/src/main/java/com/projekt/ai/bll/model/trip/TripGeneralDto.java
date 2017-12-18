package com.projekt.ai.bll.model.trip;

import com.projekt.ai.dal.domain.book.Category;
import lombok.Builder;
import lombok.Data;

/**
 * Created by Lenovo on 2017-11-08.
 */

@Data
@Builder
public class TripGeneralDto {
    private Long id;
    private String name;
    private String destination;

}
