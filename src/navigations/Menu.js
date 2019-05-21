// //import liraries
// import React, { Component } from "react";
// import { Image ,View, Text, StyleSheet } from "react-native";
// import {
//   createStackNavigator,
//   createBottomTabNavigator,
//   createAppContainer
// } from "react-navigation";

// import TransferView from '@Views/TransferView'
// import QRCodeView from '@Views/ScanQRView'
// import ProfileView from '@Views/ProfileView'
// import HomeView from '@Views/MainView'
// import EditProfile from '@Views/EditProfile'
// // create a component

// // const MainViewNav = createStackNavigator({
// //   main: {
// //     screen: HomeView
// //   },
// // });

// // const TransferNav = createStackNavigator({
// //   main: {
// //     screen: TransferView ,
// //   },
// // });

// // const ScanQRNav = createStackNavigator({
// //     main: {
// //       screen: QRCodeView
// //     },
// //   });

// //   const ProfileNav = createStackNavigator({
// //     main: {
// //       screen: ProfileView
// //     },
// //     edit: {
// //       screen: HomeView
// //     }
// //   });

// const AppNavigator = createStackNavigator(
//   {
//     home: {
//       screen: HomeView
//     },
//     tran: {
//       screen: TransferView
//     },
//     qrcode: {
//       screen: QRCodeView
//     },
//     profile: {
//       screen: ProfileView
//     },

//   },
//   {
//     initialRouteName: "home"
//   }
// );

// const Profile = createStackNavigator({
//   profile : ProfileView,
//   edit : EditProfile,
// });

// const TabNavigator = TabNavigator(
//   {
//     Home: HomeView,
//     Transfer: TransferView,
//     'Scan QR': QRCodeView,
//     Me: Profile
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         if (routeName === 'Home') {
//           return (
//             <Image
//               source={ require('@Commons/images/home.png') }
//               style={{ width: 20, height: 20, }} />
//           );
//         }
//         if( routeName === 'Scan QR') {
//           return (
//             <Image
//               source={ require('@Commons/images/scanqr.png') }
//               style={{ width: 20, height: 20, }} />
//           );
//         }
//         if( routeName === 'Transfer') {
//           return (
//             <Image
//               source={ require('@Commons/images/transfer.png') }
//               style={{ width: 20, height: 20, }} />
//           );
//         }
//         if( routeName === 'Me') {
//           return (
//             <Image
//               source={ require('@Commons/images/me.png') }
//               style={{ width: 20, height: 20, }} />
//           );
//         }
//         else {
//           return (
//             <Image
//               source={ require('@Commons/images/home.png') }
//               style={{ width: 20, height: 20 }} />
//           );
//         }
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#FF6F00',
//       inactiveTintColor: '#263238',
//     },
//   }

// );

// const AppContainer = createAppContainer(TabNavigator);

// //make this component available to the app
// export default AppContainer;

//import liraries
import React from "react";
import { Image ,View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import TransferView from '@Views/TransferView'
import QRCodeView from '@Views/ScanQRView'
import ProfileView from '@Views/ProfileView'
import HomeView from '@Views/MainView'
import EditProfile from '@Views/EditProfile'
// create a component

const MainViewNav = createStackNavigator({
  main: {
    screen: HomeView
  },
});

const TransferNav = createStackNavigator({
  tran: {
    screen: TransferView
  },
});

const ScanQRNav = createStackNavigator({
    scanqr: {
      screen: QRCodeView
    },
  });

  const ProfileNav = createStackNavigator({
    profile: {
      screen: ProfileView
    },
    editprofile:{
      screen: EditProfile
    }
  });

const TabNavigator = createBottomTabNavigator(
  {
    Home: MainViewNav,
    Transfer: TransferNav,
    'Scan QR': ScanQRNav,
    Me: ProfileNav
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ require('@Commons/images/home.png') }
              style={{ width: 20, height: 20, }} />
          );
        }
        if( routeName === 'Scan QR') {
          return (
            <Image
              source={ require('@Commons/images/scanqr.png') }
              style={{ width: 20, height: 20, }} />
          );
        }
        if( routeName === 'Transfer') {
          return (
            <Image
              source={ require('@Commons/images/transfer.png') }
              style={{ width: 20, height: 20, }} />
          );
        }
        if( routeName === 'Me') {
          return (
            <Image
              source={ require('@Commons/images/me.png') }
              style={{ width: 20, height: 20, }} />
          );
        }
        else {
          return (
            <Image
              source={ require('@Commons/images/home.png') }
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }

);

// import React from "react";
// import { View } from "react-native";
// import {
//   TabNavigator,
//   TabBarBottom,
//   createStackNavigator
// } from "react-navigation";

// import TransferView from "@Views/TransferView";
// import QRCodeView from "@Views/ScanQRView";
// import ProfileView from "@Views/ProfileView";
// import HomeView from "@Views/MainView";
// import EditProfile from "@Views/EditProfile";
// // create a component

// const MainViewNav = createStackNavigator({
//   main: {
//     screen: HomeView
//   }
// });

// const TransferNav = createStackNavigator({
//   tran: {
//     screen: TransferView
//   }
// });

// const ScanQRNav = createStackNavigator({
//   scanqr: {
//     screen: QRCodeView
//   }
// });

// const ProfileNav = createStackNavigator({
//   profile: {
//     screen: ProfileView
//   },
//   editprofile: {
//     screen: EditProfile
//   }
// });

// const DashboardTabRoutes = TabNavigator(
//   {
//     Home: MainViewNav,
//     Transfer: TransferNav,
//     "Scan QR": ScanQRNav,
//     Me: ProfileNav
//   },
//   {
//     initialRouteName: "Home",
//     navigationOptions: ({ navigation }) => {
//       const { routeName, routes } = navigation.state;
//       let params = routes && routes[1] && routes[1].params;
//       return {
//         tabBarVisible:
//           params && params.hideTabBar != null ? !params.hideTabBar : true,
//         swipeEnabled:
//           params && params.hideTabBar != null ? !params.hideTabBar : true
//       };
//     },
//     tabBarOptions: {
//       activeTintColor: "#6200EE",
//       inactiveTintColor: "#858585",
//       style: {
//         height: 60,
//         paddingVertical: 5,
//         backgroundColor: "#fff"
//       },
//       labelStyle: {
//         fontSize: 12,
//         lineHeight: 20
//       }
//     },
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: "bottom",
//     animationEnabled: true,
//     swipeEnabled: true
//   }
// );

const AppContainer = createAppContainer(TabNavigator);

//make this component available to the app
export default AppContainer;
