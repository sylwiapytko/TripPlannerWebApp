package com.projekt.ai.bll.service.test;

import com.projekt.ai.bll.model.test.TestDto;
import com.projekt.ai.bll.service.MainAssembler;
import com.projekt.ai.dal.domain.test.Test;
import org.springframework.stereotype.Service;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class TestAssembler extends MainAssembler<Test, TestDto> {

    @Override
    public TestDto toDto(Test test) {
        System.out.println("toDto");
        return TestDto.builder()
                .id(test.getId())
                .name(test.getName())
                .destination(test.getDestination())
                .date_from(test.getDate_from())
                .build();
    }


    @Override
    public Test fromDto(TestDto input) {

        return Test.builder()
                .name(input.getName())
                .destination(input.getDestination())
                .date_from(input.getDate_from())
                .build();
    }

public Test updateDto(TestDto input, Long id) {

    return Test.builder()
            .id(id)
            .name(input.getName())
            .destination(input.getDestination())
            .date_from(input.getDate_from())
            .build();
}
}
