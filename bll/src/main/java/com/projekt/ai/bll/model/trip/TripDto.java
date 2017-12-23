package com.projekt.ai.bll.model.trip;

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
public class TripDto {
    private Long id;
    private String name;
    private String destination;
    private Date date_from;
    private Date date_to;

}
