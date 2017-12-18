package com.projekt.ai.dal.domain.Trip;

import com.projekt.ai.dal.domain.book.Book;
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
}
