package com.projekt.ai.dal.domain.test;

import com.projekt.ai.dal.domain.test.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {
    Test findById(Long id);
    List<Test> findAll();
}
