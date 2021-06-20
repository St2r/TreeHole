import React, {useCallback, useEffect, useState} from 'react';
import {TAppContext} from '../common/type/context/app-context';
import {TUser} from '../common/type/user';
import {Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

type TContextWrapper = {
  children: JSX.Element | undefined
}

const contextValue = {
  user: {
    isLogin: false,
    username: '',
    id: '',
    anonymous_id: '',
    avatar: '',
  },
  setUser: undefined,
  setSnackStatus: undefined,
};

export const AppContext = React.createContext<TAppContext>(contextValue);

function ContextWrapper(props: TContextWrapper): JSX.Element {
  const [user, setUser] = useState<TUser & { isLogin: boolean }>(contextValue.user);
  const [snackStatus, setSnackStatus] = useState<{ open: boolean, type: 'success' | 'error', msg: string }>({
    open: false,
    type: 'success',
    msg: 'msg',
  });

  useEffect(() => {
    const user = window.sessionStorage.getItem('user');
    if (user !== null) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handleSnackClose = useCallback(() => {
    setSnackStatus((s) => {
      return {...s, open: false};
    });
  }, []);

  return <AppContext.Provider value={{user, setUser, setSnackStatus}}>
    {props.children}
    <Snackbar
      open={snackStatus.open} anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      autoHideDuration={2000} onClose={handleSnackClose}>
      <Alert severity={snackStatus.type}>
        {snackStatus.msg}
      </Alert>
    </Snackbar>
  </AppContext.Provider>;
}

export default ContextWrapper;
