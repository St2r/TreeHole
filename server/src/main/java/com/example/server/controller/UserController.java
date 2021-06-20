package com.example.server.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.example.server.entity.User;
import com.example.server.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    // 登录
    @RequestMapping(value = "/doLogin", method = RequestMethod.POST)
    public User doLogin(@RequestBody User user, HttpServletResponse response) {
        response.setStatus(301);
        if(user.getUsername() == null || user.getPassword() == null){
            return null;
        }
        User userInfo = userService.queryUserByName(user.getUsername());
        if (userInfo == null){
            return null;
        }
        else if (!userInfo.getPassword().equals(user.getPassword())){
            return null;
        }
        else {
            StpUtil.setLoginId(userInfo.getID());
            response.setStatus(200);
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
    public User Register(@RequestBody User user, HttpServletResponse response) {
        // 先判断有没有相同用户名
        if(userService.queryUserByName(user.getUsername()) != null){
            response.setStatus(301);
            return null;
        }
        user.setID(String.valueOf(UUID.randomUUID()));
        user.setAnonymous_id(String.valueOf(UUID.randomUUID()));
        userService.addUser(user);

        User userInfo = userService.queryUserByName(user.getUsername());
        return userInfo;
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
