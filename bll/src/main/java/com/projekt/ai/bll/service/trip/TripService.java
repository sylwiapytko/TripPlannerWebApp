package com.projekt.ai.bll.service.trip;

import com.projekt.ai.bll.model.trip.TripDto;
import com.projekt.ai.dal.domain.trip.Trip;
import com.projekt.ai.dal.domain.trip.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class TripService {

    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private TripGeneralAssembler tripGeneralAssembler;


    public List<TripDto> getTrips(){
        List<Trip> all = tripRepository.findAll();
        return tripGeneralAssembler.toDtoList(all);
    }

}
