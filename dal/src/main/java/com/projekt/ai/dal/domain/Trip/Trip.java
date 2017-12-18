package com.projekt.ai.dal.domain.Trip;

import com.projekt.ai.dal.domain.book.Category;
import com.projekt.ai.dal.domain.book.Stock;
import com.projekt.ai.dal.domain.enums.TypeOfCoverEnum;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Lenovo on 2017-11-06.
 */

@Entity
@Table(name="TRV_TRIP")
@Data
public class Trip implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "ID")
    private Long id;


    @Column(name = "NAME")
    private String name;

    @Column(name = "DESTINATION")
    private String destination;
}
