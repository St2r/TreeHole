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
    public void generateMessage(Comment comment, String userid, String brief_msg) {
        Message msg = new Message();
        msg.setMsg_status(1);
        msg.setMsg_type(comment.getCom_type());
        msg.setFather_id(comment.getFather_id());
        msg.setTarget_user_id(userid);
        if (comment.getCom_type() == 1) {
            // 评论评论
            String content = "你的评论收到了新的回复 \"" + brief_msg + "\"";
            msg.setContent(content);
        }
        else {
            // 评论文章
            String content = "你的文章收到了新的评论 \"" + brief_msg + "\"";
            msg.setContent(content);
        }
        messageMapper.insertMessage(msg);
    }
    
}
