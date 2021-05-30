package com.example.server.mapper;

import com.example.server.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserMapper {
    @Insert("insert into user(username,password,mobile,usertype) values (#{username},#{password},#{mobile},#{usertype})")
    int addUser(User user);
}
