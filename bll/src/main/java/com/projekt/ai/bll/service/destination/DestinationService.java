package com.projekt.ai.bll.service.destination;

import com.projekt.ai.bll.model.destination.DestinationDto;
import com.projekt.ai.dal.domain.destination.Destination;
import com.projekt.ai.dal.domain.destination.DestinationRepository;
import com.projekt.ai.dal.domain.trip.Trip;
import com.projekt.ai.dal.domain.trip.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class DestinationService {

    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private DestinationAssembler destinationAssembler;


    public List<DestinationDto> getDestinations(){
        List<Destination> all = destinationRepository.findAll();
        return destinationAssembler.toDtoList(all);
    }
    public List<DestinationDto> getTripDestinations(Long trip_id){
        List<Destination> all  = destinationRepository.findByTrip_id(trip_id);
        return destinationAssembler.toDtoList(all);
    }
    public DestinationDto getDestination(Long id){
        Destination byId = destinationRepository.findById(id);
        return destinationAssembler.toDto(byId);
    }
    public void addUpdateDestinations(DestinationDto destinationDto) {
            Trip trip = tripRepository.findById(destinationDto.getTrip_id());
            Destination destination = destinationAssembler.fromDto(destinationDto);
            destination.setTrip(trip);
             destinationRepository.save(destination);
    }

}
