package com.projekt.ai.dal.domain.destination;

import com.projekt.ai.dal.domain.trip.Trip;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

/**
 * Created by Lenovo on 2017-11-06.
 */

@Entity
@Table(name="TRV_DESTINATION")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Destination implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TRV_DESTINATION")
    @SequenceGenerator(name = "SEQ_TRV_DESTINATION", sequenceName = "SEQ_TRV_DESTINATION")

    @Column(name = "ID")
    private Long id;

    @ManyToOne
    private Trip trip;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DATE_FROM")
    private Date date_from;

    @Column(name = "DATE_TO")
    private Date date_to;
}
