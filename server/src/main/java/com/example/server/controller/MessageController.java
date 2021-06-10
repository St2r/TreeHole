package com.example.server.controller;

import java.util.List;

import com.example.server.entity.Message;
import com.example.server.service.MessageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/message")
public class MessageController {
    @Autowired
    private MessageService messageService;

    // 获取未读消息数
    @RequestMapping(value = "/getMsgNum", method = RequestMethod.GET)
    public int getUnreadMessageNum(@RequestBody String userid) {
        if (userid != null) {
            int msg_num = messageService.getUnreadMessageNum(userid);
            return msg_num;
        }
        return -1;
    }

    // 获取消息的列表
    @RequestMapping(value = "/getMsgs", method = RequestMethod.POST)
    public List<Message> getMessages(@RequestBody String userid) {
        if (userid != null) {
            return messageService.getMessages(userid);
        }
        return null;
    }
}