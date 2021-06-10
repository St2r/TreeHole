import React, {useCallback} from 'react';
import {Avatar, Badge} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import './style.scss';

type TUserIconProps = {
  position: 'appBar',
  className?: string,
}

function UserBar(props: TUserIconProps): JSX.Element {
  const openMail = useCallback(() => {
    console.log('open mail box');
  }, []);

  return <div className={props.className}>
    <div className="user-bar-components">
      <Avatar
        className="user-bar-avatar"
        sizes={'small'}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"/>
      <Badge className="user-bar-badge" color="secondary" badgeContent={1}>
        <MailIcon onClick={openMail}/>
      </Badge>
    </div>
  </div>;
}

export default UserBar;
