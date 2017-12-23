package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.lodging.LodgingDto;
import com.projekt.ai.bll.service.lodging.LodgingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/api/book")
public class LodgingController {

    @Autowired
    private LodgingService lodgingService;

    @RequestMapping(value = "/getLodging/{id}", method = RequestMethod.GET)
    public LodgingDto getLodging(@PathVariable("id") Long id) {
        return lodgingService.getLodging(id);
    }

    @RequestMapping(value = "/getLodgings", method = RequestMethod.GET)
    public List<LodgingDto> getLodgings() {
        return lodgingService.getLodgings();
    }
}
