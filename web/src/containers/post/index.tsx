import React, {useCallback, useContext, useRef, useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import CreateIcon from '@material-ui/icons/Create';
import {Button, Checkbox, FormControlLabel, MenuItem, Select, Zoom} from '@material-ui/core';
import {ArticleType} from '../../common/config/article-type';
import './style.scss';
import {AppContext} from '../context';
import {useHistory} from 'react-router';

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

  return (
    <>
      <div className='post-toolbar'>
        <Zoom in={true} timeout={zoomTransition} style={{transitionDelay: '300ms'}}>
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={articleType}
              onChange={handleArticleTypeChange}
            >
              {ArticleType.map((value, index) => {
                return <MenuItem key={index} value={value}>{value}</MenuItem>;
              })}
            </Select>
            <FormControlLabel
              control={<Checkbox
                color='secondary'
                checked={isAnonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
              />}
              label='匿名发帖'
            />
            <Button color='primary' variant='contained' startIcon={<CreateIcon/>}>发布</Button>
          </div>
        </Zoom>
      </div>

      <div className='editor'>
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          onChange={() => console.log(editorRef.current.getContent())}
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
