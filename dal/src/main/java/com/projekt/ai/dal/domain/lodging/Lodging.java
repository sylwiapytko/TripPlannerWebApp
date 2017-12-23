package com.projekt.ai.dal.domain.lodging;

import com.projekt.ai.dal.domain.destination.Destination;
import com.projekt.ai.dal.domain.trip.Trip;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

/**
 * Created by Lenovo on 2017-11-06.
 */

@Entity
@Table(name="TRV_LODGING")
@Data
public class Lodging implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TRV_LODGING")
    @SequenceGenerator(name = "SEQ_TRV_LODGING", sequenceName = "SEQ_TRV_LODGING")

    @Column(name = "ID")
    private Long id;

    @ManyToOne
    private Destination destination;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DATE_FROM")
    private Date date_from;

    @Column(name = "DATE_TO")
    private Date date_to;

    @Column(name = "PRICE")
    private Double price;

    @Column(name = "NOTES")
    private String notes;

}
