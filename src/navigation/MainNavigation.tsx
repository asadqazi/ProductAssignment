import React from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';
import AppNavigation from './AppNavigation';

const MainNavigation = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default MainNavigation;
