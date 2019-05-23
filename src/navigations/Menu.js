
//import liraries
import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import TransferView from "@Views/TransferView";
import QRCodeView from "@Views/ScanQRView";
import ProfileView from "@Views/ProfileView";
import HomeView from "@Views/MainView";
import EditProfile from "@Views/EditProfile";
import WalletMenu from '@Views/WalletMenu'
import SecuritySettings from '@Views/SecuritySettings'
import Promotions from '@Views/Promotions'
// create a component

const MainViewNav = createStackNavigator({
  main: {
    screen: HomeView
  },
  promotion: {
    screen: Promotions
  }
});


const TransferNav = createStackNavigator({
  tran: {
    screen: TransferView
  }
});

const ScanQRNav = createStackNavigator({
  scanqr: {
    screen: QRCodeView
  }
});

const ProfileNav = createStackNavigator({
  profile: {
    screen: ProfileView
  },
  editprofile: {
    screen: EditProfile
  },
  walletmenu: {
    screen: WalletMenu
  },
  securitysettings: {
    screen: SecuritySettings
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: MainViewNav,
    Transfer: TransferNav,
    "Scan QR": ScanQRNav,
    Me: ProfileNav
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return (
            <Image
              source={require("@Commons/images/home.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        }
        if (routeName === "Scan QR") {
          return (
            <Image
              source={require("@Commons/images/scanqr.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        }
        if (routeName === "Transfer") {
          return (
            <Image
              source={require("@Commons/images/transfer.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        }
        if (routeName === "Me") {
          return (
            <Image
              source={require("@Commons/images/me.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        } else {
          return (
            <Image
              source={require("@Commons/images/home.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: "#a82ffc",
      inactiveTintColor: "#313848"
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

//make this component available to the app
export default AppContainer;
