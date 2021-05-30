import React, {useCallback} from 'react';
import './style.scss';
import {Button, Card, CardActions, CardContent, TextField} from '@material-ui/core';

function LoginPage(): JSX.Element {
  const onClickLogin = useCallback(() => {
    console.log('on click login');
  }, []);

  return <div className='login-page'>
    <Card className='login-page-card' variant='outlined'>
      <CardContent>
        <TextField id="login-username" label="用户名" variant="outlined"/>
        <TextField id="login-password" type='password' label="密码" variant="outlined"/>
      </CardContent>
      <CardActions>
        <Button color='primary' onClick={onClickLogin} >登录</Button>
      </CardActions>
    </Card>
  </div>;
}

export default LoginPage;
