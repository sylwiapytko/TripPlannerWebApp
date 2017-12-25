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
    public List<LodgingDto>  getDestinationLodgings(@PathVariable("desination_id") Long desination_id) {
        return lodgingService.getDestinationLodgings(desination_id);
    }

    @RequestMapping(value = "/getLodgings", method = RequestMethod.GET)
    public List<LodgingDto> getLodgings() {
        return lodgingService.getLodgings();
    }
 
    @RequestMapping(value = "/addLodgings", method = RequestMethod.POST)
    public void addLodgings(@RequestBody List<LodgingDto> lodgingDtoList) {
        lodgingService.addLodgings(lodgingDtoList);
    }

    @RequestMapping(value = "/updateLodging", method = RequestMethod.POST)
    public void updateLodging(@RequestBody LodgingDto lodgingDto) {
        lodgingService.updateLodging(lodgingDto);
    }
}
