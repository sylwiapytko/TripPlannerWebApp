package com.projekt.ai.dal.domain.transport;

import com.projekt.ai.dal.domain.trip.Trip;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

/**
 * Created by Lenovo on 2017-11-06.
 */

@Entity
@Table(name="TRV_TRANSPORT")
@Data
public class Transport implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TRV_TRANSPORT")
    @SequenceGenerator(name = "SEQ_TRV_TRANSPORT", sequenceName = "SEQ_TRV_TRANSPORT")

    @Column(name = "ID")
    private Long id;

    @ManyToOne
    private Trip trip;

    @Column(name = "NAME")
    private String name;

    @Column(name = "TRANSPORT_FROM")
    private String transport_from;

    @Column(name = "TRANSPORT_to")
    private String transport_to;

    @Column(name = "DATE_FROM")
    private Date date_from;

    @Column(name = "DATE_TO")
    private Date date_to;

    @Column(name = "PRICE")
    private Double price;

    @Column(name = "NOTES")
    private String notes;
}
