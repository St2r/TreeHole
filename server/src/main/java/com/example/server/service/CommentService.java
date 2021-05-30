package com.example.server.service;

import com.example.server.entity.Comment;
import org.springframework.stereotype.Service;

@Service
public interface CommentService {
    void createComment(Comment comment);
    void deleteComment(int id);

    Comment queryCommentById(int id);
}
