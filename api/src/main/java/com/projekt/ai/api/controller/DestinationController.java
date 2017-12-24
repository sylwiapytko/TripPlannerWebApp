package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.destination.DestinationDto;
import com.projekt.ai.bll.service.destination.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/book")
public class DestinationController {

    @Autowired
    private DestinationService destinationService;

    @RequestMapping(value = "/getDestination/{id}", method = RequestMethod.GET)
    public DestinationDto getDestination(@PathVariable("id") Long id) {
        return destinationService.getDestination(id);
    }

    @RequestMapping(value = "/getTripDestinations/{trip_id}", method = RequestMethod.GET)
    public List<DestinationDto> getTripDestinations(@PathVariable("trip_id") Long trip_id) {
        return destinationService.getTripDestinations(trip_id);
    }

    @RequestMapping(value = "/getDestinations", method = RequestMethod.GET)
    public List<DestinationDto> getDestinations() {
        return destinationService.getDestinations();
    }

    @RequestMapping(value = "/addDestinations", method = RequestMethod.POST)
    public void addDestinations(@RequestBody List<DestinationDto> destinationDtoList) {
        destinationService.addDestinations(destinationDtoList);
    }
}
