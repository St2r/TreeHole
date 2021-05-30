package com.example.server.service;

import com.example.server.entity.Comment;
import com.example.server.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService{
    @Autowired
    CommentMapper commentMapper;

    public void createComment(Comment comment){
        commentMapper.createComment(comment);
    }

    public void deleteComment(int id){
        commentMapper.deleteComment(id);
    }

    public Comment queryCommentById(int id){
        return commentMapper.queryCommentById(id);
    }
}
