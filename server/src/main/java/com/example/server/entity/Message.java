package com.example.server.entity;

import java.util.Date;

import lombok.Data;

@Data
public class Message {
    private int id;

    // 收到消息的用户 id
    private String target_user_id;

    private Date create_time;

    // 已读标记
    // 0 -- 已读
    // 1 -- 未读
    // 2 -- 删除
    private int status;

    private String content;

    // 1 -- 评论评论
    // 2 -- 评论文章
    private int type;

    // 评论 id 或文章 id
    private int father_id;
}
