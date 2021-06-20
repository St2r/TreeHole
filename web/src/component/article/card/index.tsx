import React from 'react';
import {TArticle} from '../../../common/type/article';
import {Avatar, Card, Chip} from '@material-ui/core';
import ArticleComment from '../comment';
import './style.scss';

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
  const avatar = article.avatar;

  // todo 狗都不看详情页，摸了
  // const openArticleDetail = useCallback(() => {
  //   history.push('/detail');
  // }, []);

  return <div className={className}>
    <Card className='article-card' variant='outlined'>
      <div className="article-card-left">
        <Avatar
          className="article-card-avatar"
          alt='匿'
          src={avatar}/>
      </div>
      <div className="article-card-right">
        <Chip className='article-card-username' label={username} variant='outlined'/>
        <Chip className='article-card-publish-date' label={article.modify_time} variant='outlined' size='small'/>
        {/* <Button variant='text' color='primary' onClick={openArticleDetail}>查看详情</Button>*/}
        <div className="article-card-content" dangerouslySetInnerHTML={{__html: article.content}}/>

        <ArticleComment
          articleId={article.id}
          comments={article.comments}
          enableWriteComment={true}
        />
      </div>
    </Card>
  </div>;
}

export default ArticleCard;
