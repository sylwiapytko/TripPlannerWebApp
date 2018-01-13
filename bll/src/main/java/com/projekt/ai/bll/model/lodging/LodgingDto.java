package com.projekt.ai.bll.model.lodging;


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
public class LodgingDto {
    private Long id;
    private String name;
    private Double price;
    private String notes;
    private Long destination_id;

}
