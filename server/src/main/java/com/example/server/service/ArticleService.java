package com.example.server.service;

import com.example.server.entity.Article;
import com.example.server.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ArticleService {
    void createArticle(Article article);

    Article[] getArticleListByAuthorId(String author_id);

    void updateArticle(Article article);

    Article getArticleById(int id);

    void changeAnonymousStatus(Article article, User user, boolean isAnonymous);

    void deleteArticle(int id);

    List<Article> QueryArticles(int offset, int size);

    // 获取评论应该通知的 user id
    String getTargetUserId(int father_id);
}
