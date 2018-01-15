package com.projekt.ai.bll.service.lodging;

import com.projekt.ai.bll.model.lodging.LodgingDto;
import com.projekt.ai.dal.domain.destination.Destination;
import com.projekt.ai.dal.domain.destination.DestinationRepository;
import com.projekt.ai.dal.domain.lodging.Lodging;
import com.projekt.ai.dal.domain.lodging.LodgingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class LodgingService {

    @Autowired
    private LodgingRepository lodgingRepository;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private LodgingAssembler lodgingAssembler;


    public LodgingDto getDestinationLodging(Long destination_id){
        Lodging byId = lodgingRepository.findByDestination_id(destination_id);
        return lodgingAssembler.toDto(byId);
    }

    public LodgingDto getLodging(Long id){
        Lodging byId = lodgingRepository.findById(id);
        return lodgingAssembler.toDto(byId);
    }

    public void addupdateLodging(LodgingDto lodgingDto) {

            Destination destination = destinationRepository.findById(lodgingDto.getDestination_id());
            Lodging lodging = lodgingAssembler.fromDto(lodgingDto);
            lodging.setDestination(destination);
            Lodging savedLodging = lodgingRepository.save(lodging);

    }

}
