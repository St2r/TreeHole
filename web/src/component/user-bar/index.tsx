import React, {useCallback, useContext} from 'react';
import {Avatar, Badge, Button} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import './style.scss';
import {useHistory} from 'react-router';
import {TAppContext} from '../../common/type/context/app-context';
import {AppContext} from '../../containers/context';

type TUserIconProps = {
  position: 'appBar',
  className?: string,
}

function UserBar(props: TUserIconProps): JSX.Element {
  const history = useHistory();
  const appContext = useContext<TAppContext>(AppContext);

  const openMail = useCallback(() => {
    history.push('/mail');
  }, []);

  const onClickAvatarLog = useCallback(() => {
    history.push('/post');
  }, []);

  const onClickAvatarUnLog = useCallback(() => {
    history.push('/passport/login');
  }, []);

  const handleLogout = useCallback(() => {
    appContext.setUser({
      isLogin: false,
    });
    history.push('/all');
  }, []);

  return <div className={props.className}>
    <div className="user-bar-components">
      {appContext.user.isLogin ?
        <Avatar
          className="user-bar-avatar"
          sizes='small'
          alt="Remy Sharp"
          onClick={onClickAvatarLog}
          style={{cursor: 'pointer'}}
          src="https://avatars.githubusercontent.com/u/37372979?s=64&v=4"/> :
        <Avatar
          className='user-bar-avatar'
          sizes='small'
          onClick={onClickAvatarUnLog}
          style={{cursor: 'pointer'}}
        />
      }
      <Badge className="user-bar-badge" style={{cursor: 'pointer'}} color="secondary" badgeContent={1}>
        <MailIcon onClick={openMail}/>
      </Badge>
      {appContext.user.isLogin && <Button className='user-bar-logout' variant='text' onClick={handleLogout}>登出</Button>}
    </div>
  </div>;
}

export default UserBar;
