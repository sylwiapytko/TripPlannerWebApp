package com.projekt.ai.bll.service.lodging;

import com.projekt.ai.bll.model.lodging.LodgingDto;
import com.projekt.ai.bll.service.lodging.LodgingAssembler;
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
    private LodgingAssembler lodgingAssembler;


    public List<LodgingDto> getLodgings(){
        List<Lodging> all = lodgingRepository.findAll();
        return lodgingAssembler.toDtoList(all);
    }

}
