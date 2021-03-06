import React, {useCallback, useEffect, useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {useHistory, useRouteMatch} from 'react-router';
import {Fab, Zoom} from '@material-ui/core';

const postPath = '/post';

const zoomTransition = {
  enter: 400,
  exit: 400,
};

type TAddButtonProps = {
  className?: string,
}

function AddButton(props: TAddButtonProps): JSX.Element {
  const [opened, setOpened] = useState(true);

  const history = useHistory();

  const match = useRouteMatch({
    path: postPath,
    strict: true,
  });

  useEffect(() => {
    setOpened(match?.path !== postPath);
  }, [match]);

  const onClickNewPost = useCallback(() => {
    history.push('/post');
  }, []);

  return <div className={props.className}>
    <Zoom
      in={opened}
      timeout={zoomTransition}
      unmountOnExit
    >
      <Fab
        color="primary"
        onClick={onClickNewPost}>
        <AddIcon/>
      </Fab>
    </Zoom>
  </div>;
}

export default AddButton;
