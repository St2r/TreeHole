import React from 'react';
import ArticleCard from '../../component/article/card';
import {TArticle} from '../../common/type/article';

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
  return <ArticleCard article={article}/>;
}

export default MainPage;
