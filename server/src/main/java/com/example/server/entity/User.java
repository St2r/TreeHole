package com.example.server.entity;

import lombok.Data;

import java.util.Date;

@Data
public class User {   //分布式传输实体需要序列化
    private int ID;
    private String sex;
    private String username;
    private int usertype;
    private String mobile;
    private String password;
    private String avatar;
    private String email;
    private String note;
    private Date create_time;
    private Date modify_time;
}
