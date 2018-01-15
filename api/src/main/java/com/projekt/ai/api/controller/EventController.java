package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.event.EventDto;
import com.projekt.ai.bll.service.event.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/trip")
public class EventController {

    @Autowired
    private EventService activityService;

    @RequestMapping(value = "/getEvent/{id}", method = RequestMethod.GET)
    public EventDto getEvent(@PathVariable("id") Long id) {
        return activityService.getEvent(id);
    }

    @RequestMapping(value = "/getDestinationEvents/{desination_id}", method = RequestMethod.GET)
    public List<EventDto> getDestinationEvent(@PathVariable("desination_id") Long desination_id) {
        return activityService.getDestinationEvent(desination_id);
    }

    @RequestMapping(value = "/addUpdateEvent", method = RequestMethod.POST)
    public void addupdateEvent(@RequestBody EventDto activityDto) {
        activityService.addupdateEvent(activityDto);
    }

    @RequestMapping(value = "/deleteEvent/{id}", method = RequestMethod.GET)
    public void deleteEvent(@PathVariable("id") Long id) {
        activityService.deleteEvent(id);
    }
}
