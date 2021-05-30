package com.example.server.service;

import com.example.server.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    void addUser(User user);
    User queryUserByName(String username);
    User getUserInfoById(String id);
}
