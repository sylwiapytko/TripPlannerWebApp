package com.projekt.ai.dal.domain.user;

import com.projekt.ai.dal.domain.enums.Role;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Lenovo on 2017-11-06.
 */

@Entity
@Table(name="TRV_USER")
@Data
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TRV_USER")
    @SequenceGenerator(name = "SEQ_TRV_USER", sequenceName = "SEQ_TRV_USER")
    @Column(name = "ID")
    private Long id;

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "FIRSTNAME")
    private String firstname;

    @Column(name = "LASTNAME")
    private String lastname;

    @Column(name = "EMAIL")
    private String email;

}
