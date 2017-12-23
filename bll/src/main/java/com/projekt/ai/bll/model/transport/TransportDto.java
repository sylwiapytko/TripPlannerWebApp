package com.projekt.ai.bll.model.transport;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

/**
 * Created by Lenovo on 2017-11-08.
 */

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TransportDto {
    private Long id;
    private String name;
    private String transport_from;
    private String transport_to;
    private Date date_from;
    private Date date_to;
    private Double price;
    private String notes;
    private Long trip_id;

}
