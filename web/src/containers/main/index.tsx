import React from 'react';
import ArticleCard from '../../component/article/card';
import {TArticle} from '../../common/type/article';
import './style.scss';

const article: TArticle = {
  articleId: 'sss',
  title: 'title',
  content: '<p>林广艳永远的神林广艳永远的神林广艳永远的神林广艳永远的神林广艳永远的神林广艳永远的神林广艳永远的神林广艳永远的神林广艳永远的神</p>\n' +
    '<p>申雪萍永远的神</p>',
  comment: [
    {
      commentId: 'ssfdhsajk',
      content: '评论1',
      createTime: (new Date()).getTime(),
      author: null,
      reply: [
        {
          commentId: 'ssfdhsajk',
          content: '评论1',
          createTime: (new Date()).getTime(),
          author: null,
        },
      ],
    },
    {
      commentId: 'ssfdhsajk',
      content: '评论2',
      createTime: (new Date()).getTime(),
      author: null,
      reply: [],
    },
    {
      commentId: 'ssfdhsajk',
      content: '评论3',
      createTime: (new Date()).getTime(),
      author: null,
      reply: [],
    }],
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
