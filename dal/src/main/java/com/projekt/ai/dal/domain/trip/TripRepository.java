package com.projekt.ai.dal.domain.trip;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {
    Trip findById(Long id);
    List<Trip> findAll();
    List<Trip> findByUser_id(Long user_id);
}
