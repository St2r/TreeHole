package com.example.server.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.example.server.entity.Comment;
import com.example.server.entity.User;
import com.example.server.service.CommentServiceImpl;
import com.example.server.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    CommentServiceImpl commentService;
    @Autowired
    private UserServiceImpl userService;

    // 发表评论
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String CreateComment(@RequestBody Comment comment) {
        System.out.println(comment);
        if(comment.getContent() != null && comment.getAuthor_id() != null && comment.getFather_id() != 0 && comment.getType() != 0){
            commentService.createComment(comment);
            return "Create Success";
        }
        return "Params Error";
    }

    // 删除评论
    @RequestMapping(value = "/delete", method = RequestMethod.GET)
    public String DeleteComment(@RequestParam(value = "id") int id) {
        // 判断操作人是不是文章作者
        Comment comment = commentService.queryCommentById(id);
        String currentLoginId = StpUtil.getLoginId("");
        User user = userService.getUserInfoById(currentLoginId);

        if(comment.getAuthor_id().equals(user.getAnonymous_id()) || comment.getAuthor_id().equals(user.getID())){
            commentService.deleteComment(id);
            return "Delete Success";
        }
        else{
            return "User Error";
        }
    }
}
