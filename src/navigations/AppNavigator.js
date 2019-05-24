import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import FirstPage from "@Views/FirstPage";
import Navigations from "@Navigations/Menu";
import LandingView from '@Views/LandingView'

export default createAppContainer(
  createSwitchNavigator(
    {
      Maintab: Navigations,
      FirstPage: FirstPage,
      LandingPage : LandingView
    },
    {
      initialRouteName: "LandingPage"
    }
  )
);
