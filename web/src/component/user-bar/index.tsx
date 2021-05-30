import React, {useCallback} from 'react';
import {Avatar, Badge} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

type TUserIconProps = {
  position: 'appBar',
}

function UserBar(props: TUserIconProps): JSX.Element {
  const openMail = useCallback(() => {
    console.log('open mail box');
  }, []);

  return <>
    <Avatar sizes={'small'} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
    <Badge color="secondary" badgeContent={1}>
      <MailIcon onClick={openMail}/>
    </Badge>
  </>;
}

export default UserBar;
