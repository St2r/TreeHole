package com.example.server.mapper;

import com.example.server.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserMapper {
    @Insert("insert into user(username,password,usertype, id, anonymous_id, mobile) values (#{username},#{password},#{usertype},#{ID},#{anonymous_id}, #{mobile})")
    void addUser(User user);

    @Select("select * from user where username = #{username}")
    User queryUserByName(String username);

    @Select("select * from user where id = #{id} or anonymous_id = #{id}")
    User getUserInfoById(String id);
}
