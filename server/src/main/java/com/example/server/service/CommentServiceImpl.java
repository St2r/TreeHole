package com.example.server.service;

import com.example.server.entity.Comment;
import com.example.server.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<Comment> queryChildComments(int father_id, int type){
        return commentMapper.queryChildComment(father_id, type);
    }
}
