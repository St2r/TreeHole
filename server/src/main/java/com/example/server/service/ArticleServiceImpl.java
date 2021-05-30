package com.example.server.service;

import com.example.server.entity.Article;
import com.example.server.entity.User;
import com.example.server.mapper.ArticleMapper;
import com.example.server.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements ArticleService{
    @Autowired
    private ArticleMapper articleMapper;

    public void createArticle(Article article){
        articleMapper.createArticle(article);
    }

    public Article[] getArticleListByAuthorId(String author_id){
        return articleMapper.getArticleListByAuthorId(author_id);
    }

    public void updateArticle(Article article){
        if(article.getContent() != null){
            articleMapper.updateArticleContent(article);
        }
        if(article.getTitle() != null){
            articleMapper.updateArticleTitle(article);
        }
    }

    public Article getArticleById(int id){
        return articleMapper.getArticleById(id);
    }

    public void changeAnonymousStatus(Article article, User user, boolean isAnonymous){
        if(isAnonymous){
            articleMapper.updateArticleAuthorId(article.getId(), user.getID());
        }
        else{
            articleMapper.updateArticleAuthorId(article.getId(), user.getAnonymous_id());
        }
    }

    public void deleteArticle(int id){
        articleMapper.deleteArticle(id);
    }

}
