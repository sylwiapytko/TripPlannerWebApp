package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.transport.TransportDto;
import com.projekt.ai.bll.service.transport.TransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/api/book")
public class TransportController {

    @Autowired
    private TransportService transportService;

//    @RequestMapping(value = "/getBook/{id}", method = RequestMethod.GET)
//    public BookDetailedDto getBook(@PathVariable("id") Long id) {
//        return bookService.getBook(id);
//    }

    @RequestMapping(value = "/getTransports", method = RequestMethod.GET)
    public List<TransportDto> getTransport() {
        return transportService.getTransports();
    }
}
