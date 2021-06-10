package com.example.server.service;

import java.util.List;

import com.example.server.entity.Comment;
import com.example.server.entity.Message;
import com.example.server.mapper.MessageMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageMapper messageMapper;

    @Override
    public int getUnreadMessageNum(String userid) {
        return messageMapper.getUnreadMessageNum(userid);
    }

    @Override
    public List<Message> getMessages(String userid) {
        List<Message> messages = messageMapper.queryMessages(userid);
        for (Message msg : messages) {
            // TODO 生成 message 的内容
            if (msg.getType() == 1) {
                // 评论评论
            }
            else {
                // 评论文章
            }
        }
        return messages;
    }

    @Override
    public void changeReadState(int message_id, int new_status) {
        messageMapper.updateMessageStatus(message_id, new_status);
    }

    @Override
    public void deleteMessage(int message_id) {
        messageMapper.updateMessageStatus(message_id, 2);
    }

    @Override
    public void generateMessage(Comment comment, String userid) {
        Message msg = new Message();
        msg.setStatus(1);
        msg.setType(comment.getType());
        msg.setFather_id(comment.getFather_id());
        msg.setTarget_user_id(userid);
        messageMapper.insertMessage(msg);
    }
    
}
