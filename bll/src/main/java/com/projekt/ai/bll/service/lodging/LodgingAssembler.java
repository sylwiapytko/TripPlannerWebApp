package com.projekt.ai.bll.service.lodging;

import com.projekt.ai.bll.model.lodging.LodgingDto;
import com.projekt.ai.bll.service.MainAssembler;
import com.projekt.ai.dal.domain.lodging.Lodging;
import org.springframework.stereotype.Service;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class LodgingAssembler extends MainAssembler<Lodging, LodgingDto> {

    @Override
    public LodgingDto toDto(Lodging lodging) {
        return LodgingDto.builder()
                .id(lodging.getId())
                .name(lodging.getName())
                .date_from(lodging.getDate_from())
                .date_to(lodging.getDate_to())
                .destination(lodging.getDestination())
                .price(lodging.getPrice())
                .notes(lodging.getNotes())
                .build();
    }
}
