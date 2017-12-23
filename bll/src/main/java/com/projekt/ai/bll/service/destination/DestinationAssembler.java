package com.projekt.ai.bll.service.destination;

import com.projekt.ai.bll.model.destination.DestinationDto;
import com.projekt.ai.bll.service.MainAssembler;
import com.projekt.ai.dal.domain.destination.Destination;
import org.springframework.stereotype.Service;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class DestinationAssembler extends MainAssembler<Destination, DestinationDto> {

    @Override
    public DestinationDto toDto(Destination destination) {
        return DestinationDto.builder()
                .id(destination.getId())
                .destination(destination.getDestination())
                .date_from(destination.getDate_from())
                .date_to(destination.getDate_to())
                .trip(destination.getTrip())
                .build();
    }
}
