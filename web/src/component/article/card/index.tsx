import React from 'react';
import {TArticle} from '../../../common/type/article';
import {Avatar, Chip, Paper} from '@material-ui/core';
import './style.scss';

export type TArticleCardProps = {
  article: TArticle,
  className?: string | undefined,
}

function ArticleCard(props: TArticleCardProps): JSX.Element {
  const {
    article: {
      content,
    },
    className,
  } = props;
  return <div className={className}>
    <Paper className='article-card' variant='outlined'>
      <div className="article-card-left">
        <Avatar
          className="article-card-avatar"
          alt="Unknown"
          src="https://avatars.githubusercontent.com/u/37372979?s=64&v=4"/>
        <Chip
          className="article-card-follow"
          label={'关注'}
          color='primary' size='small' clickable/>
      </div>
      <div className="article-card-right">
        <Chip label={'匿名用户'} variant='outlined'/>
        <Chip label={'2021-01-01'} variant='outlined' size='small'/>
        <div className="article-card-content">{content}</div>
        <div className="article-card-comment">评论</div>
      </div>
    </Paper>
  </div>;
}

export default ArticleCard;
