package com.example.server.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Comment {
    private int id;
    private String content;
    private String author_id;
//    private String[] comment_id;
    private Date create_time;
}
