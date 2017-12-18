package com.projekt.ai.api.controller;

import com.projekt.ai.bll.model.user.UserLoginIn;
import com.projekt.ai.bll.model.user.UserLoginOut;
import com.projekt.ai.bll.model.user.UserRegisterIn;
import com.projekt.ai.bll.service.user.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/")
public class UserController {

    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public void register(@RequestBody UserRegisterIn userRegisterIn) {
        loginService.register(userRegisterIn);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public UserLoginOut login(@RequestBody UserLoginIn userLoginIn) {
        return loginService.login(userLoginIn);
    }
}
