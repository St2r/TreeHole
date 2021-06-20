import React, {useCallback, useContext, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Snackbar, TextField} from '@material-ui/core';
import {httpDoRegister} from '../../../common/fetch/passport';
import {Alert} from '@material-ui/lab';
import {TAppContext} from '../../../common/type/context/app-context';
import {AppContext} from '../../context';
import {useHistory} from 'react-router';
import './style.scss';

function RegisterPage(): JSX.Element {
  const [msgStatus, setMsgStatus] = useState({opened: false, success: false});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const appContext = useContext<TAppContext>(AppContext);
  const history = useHistory();

  const onClickRegister = useCallback(() => {
    httpDoRegister({
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
      };
      appContext.setUser(user);
      window.sessionStorage.setItem('user', JSON.stringify(user));
      setMsgStatus({opened: true, success: true});
      history.push('/all');
    }, () => {
      setMsgStatus({opened: true, success: false});
      setPassword('');
      setConfirmPassword('');
    });
  }, [username, password]);

  const handleClose = useCallback(() => {
    setMsgStatus((s) => {
      return {...s, opened: false};
    });
  }, []);

  return <div className='register-page'>
    <Card className='register-page-card' variant='outlined'>
      <CardHeader title='注册'/>
      <CardContent>
        <TextField
          className='input-uname' label="用户名" variant="outlined" value={username}
          onChange={(t) => setUsername(t.target.value)}/>
        <TextField
          className='input-pwd' type='password' label="密码" variant="outlined" value={password}
          onChange={(t) => setPassword(t.target.value)}/>
        <TextField error={password != confirmPassword}
          className='input-pwd-check' type='password' label="确认密码" variant="outlined" value={confirmPassword}
          onChange={(t) => setConfirmPassword(t.target.value)}/>
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
      open={msgStatus.opened}
      autoHideDuration={3000}
      onClose={handleClose}>
      <div>
        {
          msgStatus.success ?
            <Alert severity="success">
              注册成功
            </Alert> :
            <Alert severity="error">
              注册失败
            </Alert>
        }
      </div>
    </Snackbar>
  </div>;
}

export default RegisterPage;
