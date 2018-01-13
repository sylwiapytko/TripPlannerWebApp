package com.projekt.ai.dal.domain.event;

import com.projekt.ai.dal.domain.destination.Destination;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by Lenovo on 2017-11-06.
 */

@Entity
@Table(name="TRV_EVENT")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Event implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TRV_EVENT")
    @SequenceGenerator(name = "SEQ_TRV_EVENT", sequenceName = "SEQ_TRV_EVENT")

    @Column(name = "ID")
    private Long id;

    @ManyToOne
    private Destination destination;

    @Column(name = "NAME")
    private String name;

    @Column(name = "PRICE")
    private Double price;

    @Column(name = "NOTES")
    private String notes;

    @Column(name = "DATE_FROM")
    private Timestamp date_from;

    @Column(name = "DATE_TO")
    private Timestamp date_to;

}
