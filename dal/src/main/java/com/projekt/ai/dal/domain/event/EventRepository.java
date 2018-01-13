package com.projekt.ai.dal.domain.event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    Event findById(Long id);
    List<Event> findAll();

    List<Event> findByDestination_id(Long destination_id);
}
