package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.activity.ActivityDto;
import com.projekt.ai.bll.service.activity.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/trip")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @RequestMapping(value = "/getActivity/{id}", method = RequestMethod.GET)
    public ActivityDto getActivity(@PathVariable("id") Long id) {
        return activityService.getActivity(id);
    }

    @RequestMapping(value = "/getDestinationActivity/{desination_id}", method = RequestMethod.GET)
    public ActivityDto getDestinationActivity(@PathVariable("desination_id") Long desination_id) {
        return activityService.getDestinationActivity(desination_id);
    }

    @RequestMapping(value = "/getActivitys", method = RequestMethod.GET)
    public List<ActivityDto> getActivitys() {
        return activityService.getActivitys();
    }
 

    @RequestMapping(value = "/addUpdateActivity", method = RequestMethod.POST)
    public void addupdateActivity(@RequestBody ActivityDto activityDto) {
        activityService.addupdateActivity(activityDto);
    }

    @RequestMapping(value = "/deleteActivity/{id}", method = RequestMethod.GET)
    public void deleteActivity(@PathVariable("id") Long id) {
        activityService.deleteActivity(id);
    }
}
