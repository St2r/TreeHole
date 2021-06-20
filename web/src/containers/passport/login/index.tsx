import React, {useCallback, useContext, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Snackbar, TextField} from '@material-ui/core';
import {httpDoLogin} from '../../../common/fetch/passport';
import {useHistory} from 'react-router';
import {Alert} from '@material-ui/lab';
import {TAppContext} from '../../../common/type/context/app-context';
import {AppContext} from '../../context';
import './style.scss';

function LoginPage(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // todo unmount时机导致登录成功的msg不显示
  const [snackType, setSnackType] = useState(0);

  const history = useHistory();

  const appContext = useContext<TAppContext>(AppContext);

  const onClickLogin = useCallback((username, password) => {
    httpDoLogin({
      username,
      password,
    }).then((r) => {
      // eslint-disable-next-line camelcase
      const {username, id, anonymous_id} = r.data;
      const user = {
        isLogin: true,
        username,
        id,
        anonymous_id,
        avatar: r.data.avatar,
      };
      appContext.setUser(user);
      window.sessionStorage.setItem('user', JSON.stringify(user));
      history.push('/all');
      setSnackType(1);
    }, () => {
      setSnackType(2);
    });
  }, [username, password]);

  const onClickRegister = useCallback(() => {
    history.push('/passport/register');
  }, []);

  return <div className='login-page'>
    <Card className='login-page-card' variant='outlined'>
      <CardHeader title='登录'/>
      <CardContent>
        <TextField
          className='input-uname' label="用户名" variant="outlined" value={username} placeholder='Username'
          onChange={(event) => setUsername(event.target.value)}/>
        <TextField
          className='input-pwd' type='password' label="密码" variant="outlined" value={password} placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}/>
      </CardContent>
      <CardActions>
        <div className='login-btn-group'>
          <Button
            className='login-btn'
            color='primary'
            variant='contained'
            size='large'
            onClick={() => onClickLogin(username, password)}>登录</Button>
          <Button
            className='login-register-btn'
            onClick={onClickRegister}
            color='primary'
            variant='text'
          >没有账号？快来注册</Button>
        </div>
      </CardActions>
    </Card>
    <Snackbar
      open={snackType > 0}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={2000}
      onClose={() => setSnackType(0)}>
      {
        snackType === 1 ?
          <Alert severity="success">
            登录成功
          </Alert> :
          <Alert severity="error">
            登录失败
          </Alert>
      }
    </Snackbar>
  </div>;
}

export default LoginPage;
