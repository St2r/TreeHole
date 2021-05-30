package com.example.server.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Article {
    private int id;
    private String title;
    private String content;
    private String author_id;
    private Date create_time;
    private Date modify_time;
}
