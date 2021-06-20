import React, {useCallback} from 'react';
import {TArticle} from '../../../common/type/article';
import {Avatar, Card, Chip, Paper} from '@material-ui/core';
import './style.scss';
import {useHistory} from 'react-router';
import ArticleComment from '../comment';

export type TArticleCardProps = {
  article: TArticle,
  className?: string | undefined,
}

function ArticleCard(props: TArticleCardProps): JSX.Element {
  const {
    article,
    className,
  } = props;

  const username = (article.username === null || article.username === '') ? '匿名用户' : article.username;

  const history = useHistory();

  const openArticleDetail = useCallback(() => {
    console.log('todo open detail page');
    history.push('/detail');
  }, []);

  return <div className={className}>
    <Card className='article-card' variant='outlined'>
      <div className="article-card-left">
        <Avatar
          className="article-card-avatar"
          alt="Unknown"
          src="https://avatars.githubusercontent.com/u/37372979?s=64&v=4"/>
      </div>
      <div className="article-card-right">
        <Chip className='article-card-username' label={username} variant='outlined'/>
        <Chip className='article-card-publish-date' label={'2021-01-01'} variant='outlined' size='small'/>
        <div className="article-card-content" dangerouslySetInnerHTML={{__html: article.content}}/>
        {/*<ArticleComment*/}
        {/*  articleId={article.articleId}*/}
        {/*  comments={article.comment}*/}
        {/*/>*/}
      </div>
    </Card>
  </div>;
}

export default ArticleCard;
