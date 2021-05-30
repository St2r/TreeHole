import React, {useCallback} from 'react';
import './style.scss';
import {Button, Card, CardActions, CardContent, CardHeader, TextField} from '@material-ui/core';
import HttpClient from '../../../common/fetch/core/httpClient';
import {httpDoLogin} from '../../../common/fetch/passport';

function LoginPage(): JSX.Element {
  const onClickLogin = useCallback(() => {
    httpDoLogin({
      username: 'lzx',
      password: 'xiaobenben',
    }).then((r) => console.log(r));
    console.log('on click login');
  }, []);

  return <div className='login-page'>
    <Card className='login-page-card' variant='outlined'>
      <CardHeader title='登录'/>
      <CardContent>
        <TextField className='input-uname' label="用户名" variant="outlined"/>
        <TextField className='input-pwd' type='password' label="密码" variant="outlined"/>
      </CardContent>
      <CardActions>
        <Button
          className='login-btn'
          color='primary'
          variant='contained'
          size='large'
          onClick={onClickLogin}>登录</Button>
      </CardActions>
    </Card>
  </div>;
}

export default LoginPage;
