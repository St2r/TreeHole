package com.example.server.service;

import java.util.List;

import com.example.server.entity.Comment;
import com.example.server.entity.Message;

import org.springframework.stereotype.Service;

@Service
public interface MessageService {
    // 获取用户未读消息数
    int getUnreadMessageNum(String userid);

    // 获取用户的消息列表
    List<Message> getMessages(String userid);

    // 设置已读或未读
    void changeReadState(int message_id, int new_status);

    // 删除消息
    void deleteMessage(int message_id);

    // 生成新的 message
    void generateMessage(Comment comment, String userid);
}
