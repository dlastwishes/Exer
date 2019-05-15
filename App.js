import './global';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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