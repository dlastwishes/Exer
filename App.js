import './global';
import React from 'react';
import { StyleSheet, Text, View ,Button ,ScrollView } from 'react-native';
import Navigations from '@Navigations/Menu'
import routes1 from './src/components/Routes'
import Modal from "react-native-modal";
import AppNavigator from '@Navigations/AppNavigator'
export default class App extends React.Component {

  componentWillMount() {
   
  }

  render() {
    return (
      <AppNavigator/>
     
    );
  }
}

