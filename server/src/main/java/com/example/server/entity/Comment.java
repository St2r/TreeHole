package com.example.server.entity;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Comment {
    private int id;
    private String content;
    private String author_id;
    private Date create_time;
    private int father_id;
    // 1：评论评论，2：评论文章
    private int type;
    private List<Comment> comments;
    private String username;
}
