package com.projekt.ai.bll.model.destination;

import com.projekt.ai.dal.domain.trip.Trip;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;

/**
 * Created by Lenovo on 2017-11-08.
 */

@Data
@Builder
public class DestinationDto {
    private Long id;
    private String destination;
    private Date date_from;
    private Date date_to;
    private Trip trip;

}
