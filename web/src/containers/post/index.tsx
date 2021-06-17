import React, {useRef, useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import './style.scss';
import CreateIcon from '@material-ui/icons/Create';
import {Button, Checkbox, FormControlLabel, Zoom} from '@material-ui/core';

const zoomTransition = {
  enter: 300,
  exit: 300,
};

function PostPage(): JSX.Element {
  const [isAnonymous, setAnonymous] = useState(false);
  const editorRef = useRef<any>(null);

  return (
    <>
      <div className='post-toolbar'>
        <Zoom in={true} timeout={zoomTransition} style={{transitionDelay: '300ms'}}>
          <div>
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
