package com.projekt.ai.dal.domain.trip;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

/**
 * Created by Lenovo on 2017-11-06.
 */

@Entity
@Table(name="TRV_TRIP")
@Data
public class Trip implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TRV_TRIP")
    @SequenceGenerator(name = "SEQ_TRV_TRIP", sequenceName = "SEQ_TRV_TRIP")

    @Column(name = "ID")
    private Long id;


    @Column(name = "NAME")
    private String name;

    @Column(name = "DESTINATION")
    private String destination;

    @Column(name = "DATE_FROM")
    private Date date_from;

    @Column(name = "DATE_TO")
    private Date date_to;
}