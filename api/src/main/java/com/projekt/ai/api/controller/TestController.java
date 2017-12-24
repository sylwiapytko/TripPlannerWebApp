package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.test.TestDto;
import com.projekt.ai.bll.service.test.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/book")
public class TestController {

    @Autowired
    private TestService testService;

    @RequestMapping(value = "/getTest/{id}", method = RequestMethod.GET)
    public TestDto getTest(@PathVariable("id") Long id) {
        return testService.getTest(id);
    }

    @RequestMapping(value = "/getTests", method = RequestMethod.GET)
    public List<TestDto> getTests() {
        return testService.getTests();
    }

    @RequestMapping(value = "/addTests", method = RequestMethod.POST)
    public void addTests(@RequestBody List<TestDto> testDtoList) {
        testService.addTests(testDtoList);
    }
    @RequestMapping(value = "/updateTests", method = RequestMethod.POST)
    public void updateTests(@RequestBody TestDto testDtoList) {
        testService.updateTests(testDtoList);
    }

}
