import React, {useCallback, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Snackbar, TextField} from '@material-ui/core';
import {httpDoRegister} from '../../../common/fetch/passport';
import './style.scss';
import {Alarm} from '@material-ui/icons';

function RegisterPage(): JSX.Element {
  const [msgStatus, setMsgStatus] = useState({opened: false, success: false});


  const onClickRegister = useCallback(async () => {
    await httpDoRegister({
      username: 'leizixin',
      password: 'xiaobenben',
    }).then((e) => console.log(e));
    setMsgStatus({opened: true, success: true});
  }, []);

  const handleClose = useCallback(() => {
    setMsgStatus((s) => {
      return {...s, opened: false};
    });
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

    <Snackbar
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      open={msgStatus.opened && msgStatus.success}
      autoHideDuration={3000}
      onClose={handleClose}
      message={msgStatus.success ? '注册成功' : '注册失败'}>
    </Snackbar>
  </div>;
}

export default RegisterPage;
