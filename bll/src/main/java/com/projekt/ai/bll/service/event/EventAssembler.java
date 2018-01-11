package com.projekt.ai.bll.service.event;

import com.projekt.ai.bll.model.event.EventDto;
import com.projekt.ai.bll.service.MainAssembler;
import com.projekt.ai.dal.domain.event.Event;
import org.springframework.stereotype.Service;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class EventAssembler extends MainAssembler<Event, EventDto> {

    @Override
    public EventDto toDto(Event event) {
        return EventDto.builder()
                .id(event.getId())
                .text(event.getName())
                .start(event.getDate_from())
                .end(event.getDate_to())
                .price(event.getPrice())
                .notes(event.getNotes())
                .destination_id(event.getDestination().getId())
                .build();
    }

    @Override
    public Event fromDto(EventDto input) {

        return Event.builder()
                .id(input.getId())
                .name(input.getText())
                .date_from(input.getStart())
                .date_to(input.getEnd())
                .price(input.getPrice())
                .notes(input.getNotes())
                .destination(null)
                .build();
    }

}
