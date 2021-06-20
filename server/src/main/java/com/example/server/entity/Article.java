package com.example.server.entity;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Article {
    private int id;
    private String title;
    private String content;
    private String author_id;
    // 是否匿名  0 -- 公开  1 -- 匿名
    private int is_private;
    private String create_time;
    private String modify_time;
    private List<Comment> comments;
    private String username;
    private String type;
}
