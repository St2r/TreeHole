import React, {useRef, useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import './style.scss';
import {FormControlLabel, FormGroup, Switch} from '@material-ui/core';

// function secretSwitcher(): JSX.Element {
//   return <Switch
// }

function PostPage(): JSX.Element {
  const [isAnonymous, setAnonymous] = useState(false);

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isAnonymous}
              onChange={(event) => setAnonymous(event.target.checked)}
            />}
          label='匿名发帖'/>
      </FormGroup>
      <div className='editor'>
        <Editor
          init={{
            height: '600',
            menubar: false,
            initialValue: '发表你的文章',
          }}/>
      </div>
    </>
  );
}

export default PostPage;
