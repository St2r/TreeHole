import React from 'react';
import {TArticle} from '../../../common/type/article';
import {Avatar} from '@material-ui/core';
import './style.scss';

export type TArticleCardProps = {
  article: TArticle
}

function ArticleCard(props: TArticleCardProps): JSX.Element {
  return <div className='article-card'>
    {/* TODO*/}
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  </div>;
}

export default ArticleCard;
