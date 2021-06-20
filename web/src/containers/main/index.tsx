import React, {useEffect, useState} from 'react';
import ArticleCard from '../../component/article/card';
import {TArticle} from '../../common/type/article';
import {tabs} from '../../common/config/tabs';
import {useRouteMatch} from 'react-router';
import {Backdrop, CircularProgress, makeStyles} from '@material-ui/core';
import {ArticleType} from '../../common/config/article-type';
import './style.scss';
import {httpFetchArticleList} from '../../common/fetch/article-list';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function MainPage(): JSX.Element {
  const [tabName, setTabName] = useState('');
  const [backdrop, setBackdrop] = useState(false);
  const [articleList, setArticleList] = useState<TArticle[]>([]);

  const classes = useStyles();

  const match = useRouteMatch({
    path: tabs,
    strict: true,
  });

  useEffect(() => {
    // 这块用 context 更好，避免多次刷新，懒得改了
    if (match?.path !== undefined && tabs.includes(match?.path)) {
      const i = tabs.findIndex((e) => (e === match.path));
      if (i === 0) {
        setTabName('all');
      } else {
        setTabName(ArticleType[i - 1]);
      }
    }
  }, [match]);

  useEffect(() => {
    if (tabName === '') return;

    setBackdrop(true);
    httpFetchArticleList({type: tabName, page: 1}).then((r) => {
      console.log(r.data);
      setArticleList(r.data);
      setBackdrop(false);
    }, (e) => {
      console.log(e);
      setBackdrop(false);
    });
  }, [tabName]);

  return <>
    <Backdrop className={classes.backdrop} open={backdrop}>
      <CircularProgress color="secondary" size={200}/>
    </Backdrop>
    <div className='main-page'>
      {articleList.map((article) => {
        return <ArticleCard className='main-page-item' article={article} key={article.articleId}/>;
      })}
    </div>
    {/*  todo 骨架屏 摸了 */}
  </>;
}

export default MainPage;
