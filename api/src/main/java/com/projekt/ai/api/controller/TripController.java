package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.trip.TripDto;
import com.projekt.ai.bll.service.trip.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/api/book")
public class TripController {

    @Autowired
    private TripService tripService;

//    @RequestMapping(value = "/getBook/{id}", method = RequestMethod.GET)
//    public BookDetailedDto getBook(@PathVariable("id") Long id) {
//        return bookService.getBook(id);
//    }

    @RequestMapping(value = "/getTrips", method = RequestMethod.GET)
    public List<TripDto> getTrips() {
        return tripService.getTrips();
    }
}
