package com.example.server.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.example.server.entity.Comment;
import com.example.server.entity.User;
import com.example.server.service.ArticleService;
import com.example.server.service.CommentServiceImpl;
import com.example.server.service.MessageService;
import com.example.server.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    CommentServiceImpl commentService;
    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private MessageService messageService;
    @Autowired
    private ArticleService articleService;

    // 发表评论
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public List<Comment> CreateComment(@RequestBody Comment comment) {
        if(comment.getContent() != null && comment.getAuthor_id() != null && comment.getFather_id() != 0 && comment.getCom_type() != 0){
            User user = userService.getUserInfoById(comment.getAuthor_id());
            System.out.println(user);
            if(user.getID().equals(comment.getAuthor_id())){
                comment.setUsername(user.getUsername());
            }
            commentService.createComment(comment);

//            // 生成 message
//            int type = comment.getCom_type();
//            String brief_msg = comment.getContent();
//            if (brief_msg.length() > 10) {
//                brief_msg = brief_msg.substring(0, 10) + "...";
//            }
//            String target_user_id = null;
//            if (type == 1) {
//                // 评论评论
//                target_user_id = commentService.getTargetUserId(comment.getFather_id());
//            }
//            else if (type == 2) {
//                // 评论文章
//                target_user_id = articleService.getTargetUserId(comment.getFather_id());
//            }
//            messageService.generateMessage(comment, target_user_id, brief_msg);

            return null;
        }
        // 获取该文章下评论列表
        return commentService.queryChildComments(comment.getFather_id(), 2);
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
