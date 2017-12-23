package com.projekt.ai.dal.domain.lodging;

import com.projekt.ai.dal.domain.lodging.Lodging;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Repository
public interface LodgingRepository extends JpaRepository<Lodging, Long> {
    Lodging findById(Long id);
    List<Lodging> findAll();
}
