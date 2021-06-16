import React, {useCallback} from 'react';
import {Avatar, Badge} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import './style.scss';
import {useHistory} from 'react-router';

type TUserIconProps = {
  position: 'appBar',
  className?: string,
}

function UserBar(props: TUserIconProps): JSX.Element {
  const history = useHistory();
  const openMail = useCallback(() => {
    history.push('/mail');
  }, []);

  const onClickAvatar = useCallback(() => {
    history.push('/post');
  }, []);

  return <div className={props.className}>
    <div className="user-bar-components">
      <Avatar
        className="user-bar-avatar"
        sizes={'small'}
        alt="Remy Sharp"
        onClick={onClickAvatar}
        onFocus={() => console.log('focus')}
        src="https://avatars.githubusercontent.com/u/37372979?s=64&v=4"/>
      <Badge className="user-bar-badge" color="secondary" badgeContent={1}>
        <MailIcon onClick={openMail}/>
      </Badge>
    </div>
  </div>;
}

export default UserBar;
