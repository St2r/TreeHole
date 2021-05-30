package com.example.server.service;

import com.example.server.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    int addUser(User user);
}
