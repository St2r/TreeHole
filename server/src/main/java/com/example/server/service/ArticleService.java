package com.example.server.service;

import com.example.server.entity.Article;
import com.example.server.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface ArticleService {
    void createArticle(Article article);

    Article[] getArticleListByAuthorId(String author_id);

    void updateArticle(Article article);

    Article getArticleById(int id);

    void changeAnonymousStatus(Article article, User user, boolean isAnonymous);

    void deleteArticle(int id);

}
