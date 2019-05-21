import React from "react";
import { View } from "react-native";

import DashboardTabRoutes from '@Navigations/Menu'
import { createStackNavigator } from "react-navigation";


const Routes = createStackNavigator(
  {

    Dashboard: {
      screen: DashboardTabRoutes,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "DashboardTabRoutes",
  }
);

export default Routes;
