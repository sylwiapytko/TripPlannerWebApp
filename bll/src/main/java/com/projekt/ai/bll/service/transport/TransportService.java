package com.projekt.ai.bll.service.transport;

import com.projekt.ai.bll.model.transport.TransportDto;
import com.projekt.ai.bll.service.transport.TransportAssembler;
import com.projekt.ai.dal.domain.transport.Transport;
import com.projekt.ai.dal.domain.transport.TransportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class TransportService {

    @Autowired
    private TransportRepository transportRepository;

    @Autowired
    private TransportAssembler transportAssembler;


    public List<TransportDto> getTransports(){
        List<Transport> all = transportRepository.findAll();
        return transportAssembler.toDtoList(all);
    }
    public TransportDto getTransport(Long id){
        Transport byId = transportRepository.findById(id);
        return transportAssembler.toDto(byId);
    }
}
