package com.example.server.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.example.server.entity.User;
import com.example.server.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    // 登录
    @RequestMapping("/doLogin")
    public User doLogin(String username, String password) {
        User userInfo = userService.queryUserByName(username);
        if (userInfo == null){
            return null;
        }
        else if (!userInfo.getPassword().equals(password)){
            return null;
        }
        else {
            StpUtil.setLoginId(userInfo.getID());
            return userInfo;
        }
    }

    // 判断是否登录
    // 查询登录状态，浏览器访问： http://localhost:8081/user/isLogin
    @RequestMapping("/isLogin")
    public boolean isLogin() {
        return StpUtil.isLogin();
    }

    // 注册
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String Register(@RequestBody User user) {
        // 先判断有没有相同用户名
        if(userService.queryUserByName(user.getUsername()) != null){
            return "Username Exists";
        }
        user.setID(String.valueOf(UUID.randomUUID()));
        user.setAnonymous_id(String.valueOf(UUID.randomUUID()));
        userService.addUser(user);
        return "Register Success";
    }

    // 退出登录
    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public void Logout() {
        StpUtil.logout();
    }

    // 获取当前登录用户ID
    @RequestMapping(value = "/get_current_id", method = RequestMethod.GET)
    public String GetCurrentId(){
        return StpUtil.getLoginId("");
    }

}
