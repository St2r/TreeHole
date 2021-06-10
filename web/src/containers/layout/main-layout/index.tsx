import React, {useCallback, useState} from 'react';
import {AppBar, IconButton, Paper, Tab, Tabs, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory, useRouteMatch} from 'react-router';
import UserBar from '../../../component/user-bar';
import './style.scss';


type TMainLayoutProps = {
  children?: JSX.Element | JSX.Element[],
}

const tabs = ['/all', '/feed', '/xxx', '/ooo'];

function MainLayout(props: TMainLayoutProps): JSX.Element {
  const match = useRouteMatch({
    path: tabs,
    strict: false,
  });
  const [tabIndex, setTabIndex] =
    useState(match?.path != undefined ? tabs.findIndex((e) => e == match.path) : false);
  const history = useHistory();

  const handleTabChange = useCallback((event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
    history.push(tabs[newValue]);
  }, []);

  return (
    <>
      <AppBar position="static" color="primary" variant="outlined">
        <Toolbar variant="regular">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>

          <Typography variant="h6" color="inherit">
            TreeHole
          </Typography>

          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab label="全部"/>
            <Tab label="推荐"/>
            <Tab label="吐槽"/>
            <Tab label="表白"/>
          </Tabs>
          <div/>
          <UserBar position='appBar' className="appbar-user"/>
        </Toolbar>
      </AppBar>
      {props.children != null && props.children}
    </>
  );
}

export default MainLayout;
