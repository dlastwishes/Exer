import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import FirstPage from "@Views/FirstPage";
import Navigations from "@Navigations/Menu";

export default createAppContainer(
  createSwitchNavigator(
    {
      Maintab: Navigations,
      FirstPage: FirstPage
    },
    {
      initialRouteName: "FirstPage"
    }
  )
);
