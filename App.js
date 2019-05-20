import './global';
import './shim.js'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Web3 = require('web3');
import Navigations from '@Navigations/Menu'

export default class App extends React.Component {

  componentWillMount() {
   
  }

  render() {
    return (
      <Navigations/>
     
    );
  }
}
