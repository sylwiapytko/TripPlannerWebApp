package com.projekt.ai.bll.service.test;

import com.projekt.ai.bll.model.test.TestDto;
import com.projekt.ai.bll.service.test.TestAssembler;
import com.projekt.ai.dal.domain.test.Test;
import com.projekt.ai.dal.domain.test.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Null;
import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private TestAssembler testAssembler;


    public List<TestDto> getTests(){
        List<Test> all = testRepository.findAll();
        return testAssembler.toDtoList(all);
    }

    public TestDto getTest(Long id){
        Test byId = testRepository.findById(id);
        return testAssembler.toDto(byId);
    }

    public void addTests(List<TestDto> testDtoList) {

        for (TestDto testDto : testDtoList) {
            Test test = testAssembler.fromDto(testDto);
            Test savedTest = testRepository.save(test);

        }
    }
}
