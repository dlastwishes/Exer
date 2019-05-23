import './global';
import './shim.js'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Web3 = require('web3');
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
