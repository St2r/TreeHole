package com.example.server.service;

import com.example.server.entity.User;
import com.example.server.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    public void addUser(User user){
        userMapper.addUser(user);
    }


    public User queryUserByName(String username){
        return userMapper.queryUserByName(username);
    }

    public User getUserInfoById(String id){
        return userMapper.getUserInfoById(id);
    }


}
