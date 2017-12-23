package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.destination.DestinationDto;
import com.projekt.ai.bll.service.destination.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping(value = "/getDestinations", method = RequestMethod.GET)
    public List<DestinationDto> getDestinations() {
        return destinationService.getDestinations();
    }
}
