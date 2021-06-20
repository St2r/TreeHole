import { Avatar, Chip } from '@material-ui/core';
import React, {useState} from 'react';
import {TComment} from '../../../common/type/comment';
import ShowAll from '../show-all';
import './style.scss';

type TArticleCommentProps = {
  articleId: string,
  comments: TComment[],
}

const commentItem = () => {
  // 一条评论，过长时隐藏
  return <div className="article-one-comment">
    <div className="one-comment-left">
      <Avatar
        className="one-comment-avatar"
        alt="Unknown"
        src="https://avatars.githubusercontent.com/u/37372979?s=64&v=4"/>
    </div>
    <div className="one-comment-right">
      <Chip className='one-comment-username' label={'username'} variant='outlined'/>
      <Chip className='one-comment-publish-date' label={'2021-01-01'} variant='outlined' size='small'/>
      <div className="one-comment-content">
        一条评论一条评论一条评论一条评论一条评论一条评论一条评论一条评论一条评论一条评论一条评论一条评论一条评论
      </div>
    </div>
  </div>;
};

function ArticleComment(props: TArticleCommentProps): JSX.Element {
  const shouldFold = props.comments.length > 1;
  const [folded, setFolded] = useState(shouldFold);

  return <div className='article-comment-wrapper'>
    {commentItem()}
    <ShowAll show={folded} onClick={() => console.log('onclick show all')}/>
  </div>;
}

export default ArticleComment;
