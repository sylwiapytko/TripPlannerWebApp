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
                .price(lodging.getPrice())
                .notes(lodging.getNotes())
                .destination_id(lodging.getDestination().getId())
                .build();
    }

    @Override
    public Lodging fromDto(LodgingDto input) {

        return Lodging.builder()
                .id(input.getId())
                .name(input.getName())
                .price(input.getPrice())
                .notes(input.getNotes())
                .destination(null)
                .build();
    }

}
