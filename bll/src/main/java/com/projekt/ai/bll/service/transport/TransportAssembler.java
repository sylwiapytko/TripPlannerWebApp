package com.projekt.ai.bll.service.transport;

import com.projekt.ai.bll.model.transport.TransportDto;
import com.projekt.ai.bll.service.MainAssembler;
import com.projekt.ai.dal.domain.transport.Transport;
import org.springframework.stereotype.Service;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class TransportAssembler extends MainAssembler<Transport, TransportDto> {

    @Override
    public TransportDto toDto(Transport transport) {
        return TransportDto.builder()
                .id(transport.getId())
                .name(transport.getName())
                .transport_from(transport.getTransport_from())
                .transport_to(transport.getTransport_to())
                .date_to(transport.getDate_to())
                .price(transport.getPrice())
                .notes(transport.getNotes())
                .trip_id(transport.getTrip().getId())
                .build();
    }
}
