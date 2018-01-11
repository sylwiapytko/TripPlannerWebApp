package com.projekt.ai.bll.service.activity;

import com.projekt.ai.bll.model.activity.ActivityDto;
import com.projekt.ai.bll.service.MainAssembler;
import com.projekt.ai.dal.domain.activity.Activity;
import org.springframework.stereotype.Service;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class ActivityAssembler extends MainAssembler<Activity, ActivityDto> {

    @Override
    public ActivityDto toDto(Activity activity) {
        return ActivityDto.builder()
                .id(activity.getId())
                .text(activity.getName())
                .start(activity.getDate_from())
                .end(activity.getDate_to())
                .price(activity.getPrice())
                .notes(activity.getNotes())
                .destination_id(activity.getDestination().getId())
                .build();
    }

    @Override
    public Activity fromDto(ActivityDto input) {

        return Activity.builder()
                .id(input.getId())
                .name(input.getText())
                .date_from(input.getStart())
                .date_to(input.getEnd())
                .price(input.getPrice())
                .notes(input.getNotes())
                .destination(null)
                .build();
    }

}
