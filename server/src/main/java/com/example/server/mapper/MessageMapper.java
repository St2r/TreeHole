package com.example.server.mapper;

import java.util.List;

import com.example.server.entity.Message;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface MessageMapper {
    @Select("select count(*) from message where target_user_id = #{userid} and msg_status = 1")
    int getUnreadMessageNum(String userid);

    @Select("select * from message where target_user_id = #{userid} and msg_status <> 2")
    List<Message> queryMessages(String userid);

    @Update("update message set msg_status = #{new_status} where id = #{id}")
    void updateMessageStatus(int id, int new_status);

    @Insert("insert into message(msg_status, msg_type, father_id, target_user_id, content) values (#{msg_status}, #{msg_type}, #{father_id}, #{target_user_id}, #{content})")
    void insertMessage(Message message);
}
