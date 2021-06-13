import React, {useCallback, useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {useHistory} from 'react-router';
import {Fab} from '@material-ui/core';

type TAddButtonProps = {
  className?: string,
}

function AddButton(props: TAddButtonProps): JSX.Element {
  const history = useHistory();

  const onClickNewPost = useCallback(() => {
    history.push('/post');
  }, []);

  return <div className={props.className}>
    <Fab color="primary" onClick={onClickNewPost}>
      <AddIcon/>
    </Fab>
  </div>;
}

export default AddButton;
