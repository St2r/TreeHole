import React, {useCallback, useContext, useRef, useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import CreateIcon from '@material-ui/icons/Create';
import {Button, Checkbox, FormControlLabel, MenuItem, Select, Zoom} from '@material-ui/core';
import {ArticleType} from '../../common/config/article-type';
import {AppContext} from '../context';
import {useHistory} from 'react-router';
import {httpPostArticle} from '../../common/fetch/post';
import './style.scss';

const zoomTransition = {
  enter: 300,
  exit: 300,
};

function PostPage(): JSX.Element {
  const [isAnonymous, setAnonymous] = useState(false);
  const [articleType, setArticleType] = useState(ArticleType[0]);

  const editorRef = useRef<any>(null);
  const appContext = useContext(AppContext);
  const history = useHistory();
  if (!appContext.user.isLogin) {
    history.push('/passport/login');
  }

  const handleArticleTypeChange = useCallback((e) => {
    setArticleType(e.target.value);
  }, []);

  const handlePostArticle = useCallback(() => {
    const content = editorRef.current.getContent();
    if (content.replace(/<\/?.+?>/g, '').length === 0) {
      appContext.setSnackStatus({
        open: true,
        type: 'error',
        msg: '文章内容不能为空',
      });
      return;
    }
    httpPostArticle({
      content: content,
      author_id: isAnonymous ? appContext.user.anonymous_id : appContext.user.id,
      type: articleType,
    }).then((r) => {
      console.log(r);
      appContext.setSnackStatus({
        open: true,
        type: 'success',
        msg: '发帖成功',
      });
    }, (e) => {
      console.log(e);
      appContext.setSnackStatus({
        open: true,
        type: 'success',
        msg: '发帖成功',
      });
    });
  }, [editorRef, isAnonymous, articleType]);

  return (
    <>
      <div className='post-toolbar'>
        <Zoom in={true} timeout={zoomTransition} style={{transitionDelay: '300ms'}}>
          <div>
            <FormControlLabel
              labelPlacement={'end'}
              control={<Select
                value={articleType}
                onChange={handleArticleTypeChange}
                color='primary'
              >
                {ArticleType.map((value, index) => {
                  return <MenuItem key={index} value={value}>{value}</MenuItem>;
                })}
              </Select>}
              label='文章类型'
            />
            <FormControlLabel
              control={<Checkbox
                color='secondary'
                checked={isAnonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
              />}
              label='匿名发帖'
            />
            <Button
              color='primary' variant='contained' startIcon={<CreateIcon/>}
              onClick={handlePostArticle}>发布</Button>
          </div>
        </Zoom>
      </div>

      <div className='editor'>
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          apiKey='pzsbp1xb6j13dd4aduwebi7815hzj1upr7v42ojpcbc8c7pu'
          init={{
            height: 600,
            menubar: false,
            statusbar: false,
            placeholder: '发表你的文章...',
          }}/>
      </div>
    </>
  );
}

export default PostPage;
