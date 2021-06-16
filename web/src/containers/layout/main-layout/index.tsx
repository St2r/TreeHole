import React, {useCallback, useEffect, useState} from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@material-ui/core';
import {useHistory, useRouteMatch} from 'react-router';
import UserBar from '../../../component/user-bar';
import './style.scss';
import AddButton from '../../../component/add-button';


type TMainLayoutProps = {
  children?: JSX.Element | JSX.Element[],
}

const tabs = ['/all', '/feed', '/xxx', '/ooo'];

function MainLayout(props: TMainLayoutProps): JSX.Element {
  const match = useRouteMatch({
    path: tabs,
    strict: true,
  });

  const [tabIndex, setTabIndex] = useState<false | number>(false);

  const history = useHistory();

  useEffect(() => {
    setTabIndex(match?.path != undefined ? tabs.findIndex((e) => e === match.path) : false);
  }, [match]);

  const handleTabChange = useCallback((event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
    history.push(tabs[newValue]);
  }, []);

  const handleClickTitle = useCallback(() => {
    history.push('/all');
  }, []);

  return (
    <>
      <AppBar position="sticky" color="primary" variant="outlined">
        <Toolbar variant="dense">
          <Typography style={{cursor: 'pointer'}}
            variant="h6" color="inherit" onClick={handleClickTitle}>
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

      <AddButton
        className="appbar-add-button"
      />
    </>
  );
}

export default MainLayout;
