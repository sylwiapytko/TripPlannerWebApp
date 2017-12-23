package com.projekt.ai.dal.domain.test;

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
@Table(name="TRV_TEST")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Test implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TRV_TEST")
    @SequenceGenerator(name = "SEQ_TRV_TEST", sequenceName = "SEQ_TRV_TEST")

    @Column(name = "ID")
    private Long id;


    @Column(name = "NAME")
    private String name;

    @Column(name = "DESTINATION")
    private String destination;

    @Column(name = "DATE_FROM")
    private Date date_from;
}
