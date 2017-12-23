package com.projekt.ai.dal.domain.destination;

import com.projekt.ai.dal.domain.trip.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Repository
public interface DestinationRepository extends JpaRepository<Destination, Long> {
    Destination findById(Long id);
    List<Destination> findAll();
}
