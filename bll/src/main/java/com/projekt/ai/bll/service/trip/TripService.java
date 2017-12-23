package com.projekt.ai.bll.service.trip;

import com.projekt.ai.bll.model.trip.TripDto;
import com.projekt.ai.dal.domain.trip.Trip;
import com.projekt.ai.dal.domain.trip.TripRepository;
import org.omg.Messaging.SYNC_WITH_TRANSPORT;
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
    private TripAssembler tripAssembler;


    public List<TripDto> getTrips(){
        List<Trip> all = tripRepository.findAll();
        return tripAssembler.toDtoList(all);
    }

    public TripDto getTrip(Long id){
        Trip byId = tripRepository.findById(id);
        return tripAssembler.toDto(byId);
    }

    public void addTrips(List<TripDto> tripDtoList) {

        for (TripDto tripDto : tripDtoList) {
            Trip trip = tripAssembler.fromDto(tripDto);
            Trip savedTrip = tripRepository.save(trip);

        }
    }
}
