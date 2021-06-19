import React, {useCallback} from 'react';
import {Typography} from '@material-ui/core';

type TShowAllProps = {
  show: boolean
  onClick: () => {}
}

function ShowAll(props: TShowAllProps): JSX.Element {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    props.onClick();
  }, []);

  return <Typography
    variant="body1" color='primary' onClick={handleClick}
    style={props.show ? {display: 'inline-block', cursor: 'pointer'} : {display: 'none'}}
  >展示全部</Typography>;
}

export default ShowAll;
