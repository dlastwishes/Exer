import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import FirstPage from "@Views/FirstPage";
import Navigations from '@Navigations/Menu'
export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Maintab: Navigations,
  FirstPage : FirstPage
},{
    initialRouteName: 'FirstPage',
}

));