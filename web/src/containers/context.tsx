import React from 'react';
import {TAppContext} from '../common/type/context/app-context';

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
};

export const AppContext = React.createContext<TAppContext>(contextValue);

function ContextWrapper(props: TContextWrapper): JSX.Element {
  return <AppContext.Provider value={contextValue}>
    {props.children}
  </AppContext.Provider>;
}

export default ContextWrapper;
