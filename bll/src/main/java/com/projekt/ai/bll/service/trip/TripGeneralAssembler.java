package com.projekt.ai.bll.service.trip;

import com.projekt.ai.bll.model.trip.TripDto;
import com.projekt.ai.bll.service.MainAssembler;
import com.projekt.ai.dal.domain.trip.Trip;
import org.springframework.stereotype.Service;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class TripGeneralAssembler extends MainAssembler<Trip, TripDto> {

    @Override
    public TripDto toDto(Trip trip) {
        return TripDto.builder()
                .id(trip.getId())
                .name(trip.getName())
                .destination(trip.getDestination())
                .date_from(trip.getDate_from())
                .date_to(trip.getDate_to())
                .build();
    }
}
