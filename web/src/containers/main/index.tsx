import React from 'react';
import ArticleCard from '../../component/article/card';
import {TArticle} from '../../common/type/article';
import './style.scss';

const article: TArticle = {
  articleId: 'sss',
  title: 'title',
  content: 'content',
  comment: [],
  author: {
    userId: 'userId',
    username: 'username',
  },
};

function MainPage(): JSX.Element {
  return <div className='main-page'>
    <ArticleCard className='main-page-item' article={article}/>
    <ArticleCard className='main-page-item' article={article}/>
    <ArticleCard className='main-page-item' article={article}/>
  </div>;
}

export default MainPage;
