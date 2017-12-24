package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.transport.TransportDto;
import com.projekt.ai.bll.service.transport.TransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/book")
public class TransportController {

    @Autowired
    private TransportService transportService;


    @RequestMapping(value = "/getTransport/{id}", method = RequestMethod.GET)
    public TransportDto getTransport(@PathVariable("id") Long id) {
        return transportService.getTransport(id);
    }

    @RequestMapping(value = "/getTripTransport/{trip_id}", method = RequestMethod.GET)
    public List<TransportDto> getTripTransport(@PathVariable("trip_id") Long trip_id) {
        return transportService.getTripTransport(trip_id);
    }

    @RequestMapping(value = "/getTransports", method = RequestMethod.GET)
    public List<TransportDto> getTransports() {
        return transportService.getTransports();
    }

    @RequestMapping(value = "/addTransports", method = RequestMethod.POST)
    public void addTransports(@RequestBody List<TransportDto> transportDtoList) {
        transportService.addTransports(transportDtoList);
    }
    @RequestMapping(value = "/updateTransport", method = RequestMethod.POST)
    public void updateTransport(@RequestBody TransportDto transportDto) {
        transportService.updateTransport(transportDto);
    }
}
