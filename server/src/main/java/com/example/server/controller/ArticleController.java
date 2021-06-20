package com.example.server.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.example.server.entity.Article;
import com.example.server.entity.Comment;
import com.example.server.entity.User;
import com.example.server.service.ArticleServiceImpl;
import com.example.server.service.CommentServiceImpl;
import com.example.server.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/article")
public class ArticleController {
    @Autowired
    private ArticleServiceImpl articleService;
    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private CommentServiceImpl commentService;

    // 发布文章
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String CreateArticle(@RequestBody Article article) {
        if(article.getContent() != null && article.getAuthor_id() != null){
            User user = userService.getUserInfoById(article.getAuthor_id());
            if(user.getID().equals(article.getAuthor_id())){
                article.setUsername(user.getUsername());
            }
            article.setTitle("");
            articleService.createArticle(article);
            return "{\"msg\": \"Create Success\"}";
        }
        else{
            return "{\"msg\": \"Params Error\"}";
        }
    }

    // 查看用户文章列表
    @RequestMapping(value = "/get_article_list", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Article[]> GetUserArticleList(@RequestParam(value = "userAnonymousId", required = false) String userAnonymousId, @RequestParam(value = "userRealId", required = false) String userRealId){
        Map<String, Article[]> articleList = new HashMap<String, Article[]>();
        String id = (userAnonymousId != null? userAnonymousId: userRealId);
        if(id == null) return articleList;
        User user = userService.getUserInfoById(id);
        String currentLoginId = StpUtil.getLoginId("");
        // 判断传过来的用户和当前登录用户是否是一个人，即是查看自己的文章列表还是查看别人的文章列表
        // 如果是查看自己的文章列表
        if(currentLoginId.equals(user.getID())){
            articleList.put("anonymous_article", articleService.getArticleListByAuthorId(user.getAnonymous_id()));
            articleList.put("real_article", articleService.getArticleListByAuthorId(user.getID()));
        }
        else{
            articleList.put("real_article", articleService.getArticleListByAuthorId(user.getID()));
        }
        return articleList;
    }

    // 修改文章标题/内容
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public String UpdateArticle(@RequestBody Article article) {
        if((article.getTitle() != null || article.getContent() != null) && article.getAuthor_id() != null && article.getId() != 0){
            // 判断文章作者是不是当前用户
            User user = userService.getUserInfoById(article.getAuthor_id());
            String currentLoginId = StpUtil.getLoginId("");
            if(user.getID().equals(currentLoginId)){
                articleService.updateArticle(article);
                return "Update Success";
            }
            return "User Error";
        }
        else{
            return "Params Error";
        }
    }

    // 切换文章匿名状态
    @RequestMapping(value = "/update_article_anonymous_status", method = RequestMethod.GET)
    public String UpdateArticleAnonymousStatus(@RequestParam(value = "id")int id) {
        // 判断操作人是不是文章作者
        Article article = articleService.getArticleById(id);
        String currentLoginId = StpUtil.getLoginId("");
        User user = userService.getUserInfoById(currentLoginId);
        boolean isAnonymous;
        if(user.getID().equals(article.getAuthor_id())){
            isAnonymous = false;
        }
        else if(user.getAnonymous_id().equals(article.getAuthor_id())){
            isAnonymous = true;
        }
        else{
            return "User Error";
        }
        articleService.changeAnonymousStatus(article, user, isAnonymous);
        return "Change Success";
    }

    // 删除文章
    @RequestMapping(value = "/delete", method = RequestMethod.GET)
    public String DeleteArticle(@RequestParam(value = "id") int id) {
        // 判断操作人是不是文章作者
        Article article = articleService.getArticleById(id);
        String currentLoginId = StpUtil.getLoginId("");
        User user = userService.getUserInfoById(currentLoginId);

        if(user.getID().equals(article.getAuthor_id()) || user.getAnonymous_id().equals(article.getAuthor_id())){
            articleService.deleteArticle(id);
            return "Delete Success";
        }
        else{
            return "User Error";
        }
    }

    // 获取首页文章
    @RequestMapping(value = "/query", method = RequestMethod.GET)
    public List<Article> DeleteArticle(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, @RequestParam(value = "type", defaultValue = "") String type) {
        if(page == null) page = 1;
        if(size == null) size = 10;
        List<Article> articles = articleService.QueryArticles((page-1)*size, size, type);

        for(int i=0; i<articles.size(); i++){
            Article thisArticle = articles.get(i);
            thisArticle.setComments(commentService.queryChildComments(thisArticle.getId(), 2));
            for(int j=0; j<thisArticle.getComments().size(); j++){
                Comment thisComment = thisArticle.getComments().get(j);
                thisComment.setComments(commentService.queryChildComments(thisComment.getId(), 1));
            }
        }
        return articles;
    }
}
