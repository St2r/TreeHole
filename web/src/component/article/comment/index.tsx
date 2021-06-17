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
  return <div>一条评论</div>;
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
