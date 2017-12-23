package com.projekt.ai.bll.service.destination;

import com.projekt.ai.bll.model.destination.DestinationDto;
import com.projekt.ai.dal.domain.destination.Destination;
import com.projekt.ai.dal.domain.destination.DestinationRepository;
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
    private DestinationAssembler destinationGeneralAssembler;


    public List<DestinationDto> getDestinations(){
        List<Destination> all = destinationRepository.findAll();
        return destinationGeneralAssembler.toDtoList(all);
    }

}
