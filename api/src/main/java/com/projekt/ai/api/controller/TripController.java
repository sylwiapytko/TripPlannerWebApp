package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.trip.TripDto;
import com.projekt.ai.bll.service.trip.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/trip")
public class TripController {

    @Autowired
    private TripService tripService;

    @RequestMapping(value = "/getTrip/{id}", method = RequestMethod.GET)
    public TripDto getTrip(@PathVariable("id") Long id) {
        return tripService.getTrip(id);
    }

    @RequestMapping(value = "/getUserTrips/{user_id}", method = RequestMethod.GET)
    public List<TripDto> getUserTrips(@PathVariable("user_id") Long user_id) {
        return tripService.getUserTrips(user_id);
    }

    @RequestMapping(value = "/getTrips", method = RequestMethod.GET)
    public List<TripDto> getTrips() {
        return tripService.getTrips();
    }

    @RequestMapping(value = "/addUpdateTrip", method = RequestMethod.POST)
    public void updateTrip(@RequestBody TripDto tripDto) {
        tripService.addUpdateTrip(tripDto);
    }

    @RequestMapping(value = "/deleteTrip/{trip_id}", method = RequestMethod.GET)
    public void deleteTrip(@PathVariable("trip_id") Long tripId) {
        tripService.deleteTrip(tripId);
    }
}
