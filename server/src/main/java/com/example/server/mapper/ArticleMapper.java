package com.example.server.mapper;

import com.example.server.entity.Article;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface ArticleMapper {
    @Insert("insert into article(title,content,author_id) values (#{title},#{content},#{author_id})")
    void createArticle(Article article);

    @Select("select * from article where author_id = #{author_id}")
    Article[] getArticleListByAuthorId(String author_id);

    @Update("update article set content = #{content} where id = #{id}")
    void updateArticleContent(Article article);

    @Update("update article set title = #{title} where id = #{id}")
    void updateArticleTitle(Article article);

    @Select("select * from article where id = #{id}")
    Article getArticleById(int id);

    @Update("update article set author_id = #{author_id} where id = #{id}")
    void updateArticleAuthorId(int id, String author_id);

    @Delete("delete from article where id=#{id}")
    void deleteArticle(int id);
}
