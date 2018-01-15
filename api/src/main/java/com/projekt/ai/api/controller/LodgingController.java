package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.lodging.LodgingDto;
import com.projekt.ai.bll.service.lodging.LodgingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/trip")
public class LodgingController {

    @Autowired
    private LodgingService lodgingService;

    @RequestMapping(value = "/getLodging/{id}", method = RequestMethod.GET)
    public LodgingDto getLodging(@PathVariable("id") Long id) {
        return lodgingService.getLodging(id);
    }

    @RequestMapping(value = "/getDestinationLodging/{desination_id}", method = RequestMethod.GET)
    public LodgingDto getDestinationLodging(@PathVariable("desination_id") Long desination_id) {
        return lodgingService.getDestinationLodging(desination_id);
    }

    @RequestMapping(value = "/addUpdateLodging", method = RequestMethod.POST)
    public void addupdateLodging(@RequestBody LodgingDto lodgingDto) {
        lodgingService.addupdateLodging(lodgingDto);
    }
}
