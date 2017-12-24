package com.projekt.ai.dal.domain.transport;

import com.projekt.ai.dal.domain.transport.Transport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Repository
public interface TransportRepository extends JpaRepository<Transport, Long> {
    Transport findById(Long id);
    List<Transport> findAll();

    List<Transport> findByTrip_id(Long trip_id);
}
