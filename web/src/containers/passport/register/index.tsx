import React, {useCallback} from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, TextField} from '@material-ui/core';
import {httpDoRegister} from '../../../common/fetch/passport';
import './style.scss';

function RegisterPage(): JSX.Element {
  const onClickRegister = useCallback(() => {
    httpDoRegister({
      username: 'leizixin',
      password: 'xiaobenben',
    }).then((e) => console.log(e));
  }, []);

  return <div className='register-page'>
    <Card className='register-page-card' variant='outlined'>
      <CardHeader title='注册'/>
      <CardContent>
        <TextField className='input-uname' label="用户名" variant="outlined"/>
        <TextField className='input-pwd' type='password' label="密码" variant="outlined"/>
        <TextField className='input-pwd-check' type='password' label="确认密码" variant="outlined"/>
      </CardContent>
      <CardActions>
        <Button
          className='register-btn'
          color='primary'
          variant='contained'
          size='large'
          onClick={onClickRegister}>注册</Button>
      </CardActions>
    </Card>
  </div>;
}

export default RegisterPage;
