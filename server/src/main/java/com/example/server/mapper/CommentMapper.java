package com.example.server.mapper;

import com.example.server.entity.Comment;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface CommentMapper {
    @Insert("insert into comment(content,author_id,father_id,com_type) values (#{content},#{author_id},#{father_id},#{com_type})")
    void createComment(Comment comment);

    @Delete("delete from comment where id = #{id} or (com_type = 1 and father_id = #{id})")
    void deleteComment(int id);

    @Select("select * from comment where id = #{id}")
    Comment queryCommentById(int id);

    @Select("select * from comment where com_type = #{com_type} and father_id = #{father_id}")
    List<Comment> queryChildComment(int father_id, int type);
}
