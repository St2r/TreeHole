package com.example.server.service;

import com.example.server.entity.Comment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentService {
    void createComment(Comment comment);

    void deleteComment(int id);

    Comment queryCommentById(int id);

    List<Comment> queryChildComments(int father_id, int type);

    // 获取评论应该通知的 user id
    String getTargetUserId(int father_id);
}
