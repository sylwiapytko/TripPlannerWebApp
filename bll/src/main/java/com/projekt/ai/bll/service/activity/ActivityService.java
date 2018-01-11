package com.projekt.ai.bll.service.activity;

import com.projekt.ai.bll.model.activity.ActivityDto;
import com.projekt.ai.dal.domain.activity.Activity;
import com.projekt.ai.dal.domain.activity.ActivityRepository;
import com.projekt.ai.dal.domain.destination.Destination;
import com.projekt.ai.dal.domain.destination.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Lenovo on 2017-11-05.
 */

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private DestinationRepository destinationRepository;
    @Autowired
    private ActivityAssembler activityAssembler;


    public List<ActivityDto> getActivitys(){
        List<Activity> all = activityRepository.findAll();
        return activityAssembler.toDtoList(all);
    }

    public List<ActivityDto> getDestinationActivity(Long destination_id){
        List<Activity> all = activityRepository.findByDestination_id(destination_id);
        return activityAssembler.toDtoList(all);
    }

    public ActivityDto getActivity(Long id){
        Activity byId = activityRepository.findById(id);
        return activityAssembler.toDto(byId);
    }

    public void addupdateActivity(ActivityDto activityDto) {

            Destination destination = destinationRepository.findById(activityDto.getDestination_id());
            Activity activity = activityAssembler.fromDto(activityDto);
            activity.setDestination(destination);
            Activity savedActivity = activityRepository.save(activity);

    }

    public void deleteActivity(Long Id) {
        activityRepository.delete(Id);
    }

}
