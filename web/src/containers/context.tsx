import React, {useEffect, useState} from 'react';
import {TAppContext} from '../common/type/context/app-context';
import {TUser} from '../common/type/user';

type TContextWrapper = {
  children: JSX.Element | undefined
}

const contextValue = {
  user: {
    isLogin: false,
    username: '',
    id: '',
    anonymous_id: '',
  },
  setUser: undefined,
};

export const AppContext = React.createContext<TAppContext>(contextValue);

function ContextWrapper(props: TContextWrapper): JSX.Element {
  const [user, setUser] = useState<TUser & {isLogin: boolean}>(contextValue.user);

  useEffect(() => {
    const user = window.sessionStorage.getItem('user');
    if (user !== null) {
      setUser(JSON.parse(user));
    }
  }, []);

  return <AppContext.Provider value={{user, setUser}}>
    {props.children}
  </AppContext.Provider>;
}

export default ContextWrapper;
