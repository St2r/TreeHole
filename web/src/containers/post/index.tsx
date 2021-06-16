import React, {useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import './style.scss';
import CreateIcon from '@material-ui/icons/Create';
import {Button, Checkbox, FormControlLabel} from '@material-ui/core';

function PostPage(): JSX.Element {
  const [isAnonymous, setAnonymous] = useState(false);

  return (
    <>
      <div className='post-toolbar'>
        <FormControlLabel
          control={<Checkbox
            color='primary'
            checked={isAnonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />}
          label='匿名发帖'
        />
        <Button color='primary' variant='contained' startIcon={<CreateIcon/>}>发布</Button>
      </div>

      <div className='editor'>
        <Editor
          apiKey='pzsbp1xb6j13dd4aduwebi7815hzj1upr7v42ojpcbc8c7pu'
          init={{
            height: 600,
            menubar: false,
            initialValue: '发表你的文章',
            statusbar: false,
          }}/>
      </div>
    </>
  );
}

export default PostPage;
