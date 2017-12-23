package com.projekt.ai.bll.model.lodging;

import com.projekt.ai.dal.domain.destination.Destination;
import com.projekt.ai.dal.domain.trip.Trip;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;

/**
 * Created by Lenovo on 2017-11-08.
 */

@Data
@Builder
public class LodgingDto {
    private Long id;
    private String name;
    private Date date_from;
    private Date date_to;
    private Double price;
    private String notes;
    private Long destination_id;

}
