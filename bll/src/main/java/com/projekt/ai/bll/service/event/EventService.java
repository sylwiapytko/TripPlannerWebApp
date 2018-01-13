package com.projekt.ai.bll.service.event;

import com.projekt.ai.bll.model.event.EventDto;
import com.projekt.ai.dal.domain.event.Event;
import com.projekt.ai.dal.domain.event.EventRepository;
import com.projekt.ai.dal.domain.destination.Destination;
import com.projekt.ai.dal.domain.destination.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private EventAssembler eventAssembler;


    public List<EventDto> getEvents(){
        List<Event> all = eventRepository.findAll();
        return eventAssembler.toDtoList(all);
    }

    public List<EventDto> getDestinationEvent(Long destination_id){
        List<Event> all = eventRepository.findByDestination_id(destination_id);
        return eventAssembler.toDtoList(all);
    }

    public EventDto getEvent(Long id){
        Event byId = eventRepository.findById(id);
        return eventAssembler.toDto(byId);
    }

    public void addupdateEvent(EventDto eventDto) {

            Destination destination = destinationRepository.findById(eventDto.getDestination_id());
            Event event = eventAssembler.fromDto(eventDto);
            event.setDestination(destination);
            Event savedEvent = eventRepository.save(event);

    }

    public void deleteEvent(Long Id) {
        eventRepository.delete(Id);
    }

}
