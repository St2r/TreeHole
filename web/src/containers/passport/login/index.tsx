import React, {useCallback, useState} from 'react';
import './style.scss';
import {Button, Card, CardActions, CardContent, CardHeader, TextField} from '@material-ui/core';
import {httpDoLogin} from '../../../common/fetch/passport';

function LoginPage(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onClickLogin = useCallback((username, password) => {
    httpDoLogin({
      username,
      password,
    }).then((r) => console.log(r));
    console.log('on click login');
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
        <Button
          className='login-btn'
          color='primary'
          variant='contained'
          size='large'
          onClick={() => onClickLogin(username, password)}>登录</Button>
      </CardActions>
    </Card>
  </div>;
}

export default LoginPage;
