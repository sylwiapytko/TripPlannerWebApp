package com.projekt.ai.bll.model.transport;

import com.projekt.ai.dal.domain.trip.Trip;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;

/**
 * Created by Lenovo on 2017-11-08.
 */

@Data
@Builder
public class TransportDto {
    private Long id;
    private String name;
    private String transport_from;
    private String transport_to;
    private Date date_from;
    private Date date_to;
    private Double price;
    private String notes;
    private Trip trip;

}
