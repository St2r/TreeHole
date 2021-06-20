package com.example.server.entity;

import lombok.Data;

import java.util.List;

@Data
public class Comment {
    private int id;
    private String content;
    private String author_id;
    private String create_time;
    private int father_id;
    // 1：评论评论，2：评论文章
    private int com_type;
    private List<Comment> comments;
    private String username;
    private String avatar;
}
