import {Avatar, Button, Checkbox, Chip, FormControlLabel, Input} from '@material-ui/core';
import React, {useCallback, useContext, useState} from 'react';
import {TComment} from '../../../common/type/comment';
import './style.scss';
import {httpNewComment} from '../../../common/fetch/comment';
import {AppContext} from '../../../containers/context';
import {useHistory} from 'react-router';

type TArticleCommentProps = {
  articleId: string,
  comments: TComment[],
  enableWriteComment: boolean;
}

const commentItem = (comment: TComment) => {
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
        {comment.content}
      </div>
    </div>
  </div>;
};

function ArticleComment(props: TArticleCommentProps): JSX.Element {
  // const shouldFold = props.comments.length > 1;
  // const [folded, setFolded] = useState(shouldFold);
  const [input, setInput] = useState('');
  const [isAnonymous, setAnonymous] = useState(false);

  const appContext = useContext(AppContext);

  const history = useHistory();

  const handlePostComment = useCallback(() => {
    if (!appContext.user.isLogin) {
      history.push('/passport/login');
      return;
    }
    if (input.length === 0) {
      appContext.setSnackStatus({
        open: true,
        msg: '内容不能为空',
        type: 'error',
      });
      return;
    }
    console.log(props.articleId);
    httpNewComment({
      com_type: 2,
      content: input,
      father_id: props.articleId,
      author_id: isAnonymous ? appContext.user.anonymous_id : appContext.user.id,
    }).then((r) => {
      appContext.setSnackStatus({
        open: true,
        msg: '发送成功',
        type: 'success',
      });
    }, (e) => {
      console.log(e);
      appContext.setSnackStatus({
        open: true,
        msg: '发送失败',
        type: 'error',
      });
    });
  }, [input, isAnonymous]);

  return <div className='article-comment-wrapper'>
    {props.comments.map((comment) => {
      return commentItem(comment);
    })}
    {/* <ShowAll show={folded} onClick={() => console.log('onclick show all')}/>*/}
    {
      props.enableWriteComment &&
      <div className='comment-writer-wrapper'>
        <Input
          className='comment-input' placeholder='输入你的看法' disabled={!appContext.user.isLogin}
          fullWidth value={input} onChange={(e) => setInput(e.target.value)}/>
        <FormControlLabel
          className='comment-anonymous'
          style={{fontSize: '12px'}}
          control={<Checkbox
            color='secondary'
            checked={isAnonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />}
          label='匿名评论'
        />
        <Button className='comment-button' color='primary' variant='text' onClick={handlePostComment}>发布评论</Button>
      </div>}
  </div>;
}

export default ArticleComment;
