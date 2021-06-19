import React, {useEffect, useState} from 'react';
import ArticleCard from '../../component/article/card';
import {TArticle} from '../../common/type/article';
import {tabs} from '../../common/config/tabs';
import {useRouteMatch} from 'react-router';
import {Backdrop, CircularProgress, makeStyles} from '@material-ui/core';
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
    },
    {
      commentId: 'ssfdhsajk',
      content: '评论2',
      createTime: (new Date()).getTime(),
      author: null,
    },
    {
      commentId: 'ssfdhsajk',
      content: '评论3',
      createTime: (new Date()).getTime(),
      author: null,
    }],
  author: {
    userId: 'userId',
    username: 'username',
  },
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function MainPage(): JSX.Element {
  const [tabName, setTabName] = useState('');
  const [backdrop, setBackdrop] = useState(false);

  const classes = useStyles();

  const match = useRouteMatch({
    path: tabs,
    strict: true,
  });

  useEffect(() => {
    // 这块用 context 更好，避免多次刷新，懒得改了
    if (match?.path !== undefined && tabs.includes(match?.path)) {
      setTabName(match!.path);
    }
  }, [match]);

  useEffect(() => {
    // todo fetch
    if (tabName === '') return;
    console.log(tabName);
    setBackdrop(true);
    setTimeout(() => {
      setBackdrop(false);
    }, 1000);
  }, [tabName]);

  return <>
    <Backdrop className={classes.backdrop} open={backdrop}>
      <CircularProgress color="secondary" size={200}/>
    </Backdrop>
    <div className='main-page'>
      <ArticleCard className='main-page-item' article={article}/>
      <ArticleCard className='main-page-item' article={article}/>
      <ArticleCard className='main-page-item' article={article}/>
    </div>
    {/*  todo 骨架屏 摸了 */}
  </>;
}

export default MainPage;
