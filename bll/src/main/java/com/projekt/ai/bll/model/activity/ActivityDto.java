package com.projekt.ai.bll.model.activity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * Created by Lenovo on 2017-11-08.
 */

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ActivityDto {
    private Long id;
    private String text;
    private Timestamp start ;
    private Timestamp end;
    private Double price;
    private String notes;
    private Long destination_id;

}
