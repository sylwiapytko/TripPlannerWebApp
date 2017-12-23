package com.projekt.ai.bll.model.destination;

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
public class DestinationDto {
    private Long id;
    private String name;
    private Date date_from;
    private Date date_to;
    private Long trip_id;

}
