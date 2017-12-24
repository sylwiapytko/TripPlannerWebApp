package com.projekt.ai.bll.model.test;

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
public class TestDto {
    private Long id;
    private String name;
    private String destination;
    private Date date_from;

}
