package com.projekt.ai.dal.domain.activity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
    Activity findById(Long id);
    List<Activity> findAll();

    Activity findByDestination_id(Long destination_id);
}
