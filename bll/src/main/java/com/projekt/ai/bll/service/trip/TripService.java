package com.projekt.ai.bll.service.trip;

import com.projekt.ai.bll.model.trip.TripDto;
import com.projekt.ai.dal.domain.lodging.Lodging;
import com.projekt.ai.dal.domain.trip.Trip;
import com.projekt.ai.dal.domain.trip.TripRepository;
import com.projekt.ai.dal.domain.user.User;
import com.projekt.ai.dal.domain.user.UserRepository;
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

    @Autowired
    private UserRepository userRepository;


    public List<TripDto> getUserTrips(Long user_id) {
        List<Trip> all  = tripRepository.findByUser_id(user_id);
        return tripAssembler.toDtoList(all);
    }

    public TripDto getTrip(Long id){
        Trip byId = tripRepository.findById(id);
        return tripAssembler.toDto(byId);
    }

    public void addUpdateTrip(TripDto tripDto) {

        User user = userRepository.findById(tripDto.getUser_id());
        Trip trip = tripAssembler.fromDto(tripDto);
        trip.setUser(user);
        Trip savedTrip = tripRepository.save(trip);
    }

    public void deleteTrip(Long tripId) {
        tripRepository.delete(tripId);
    }

}
