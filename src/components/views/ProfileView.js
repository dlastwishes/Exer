import React, { Component } from "react";
import { Icon, StyleSheet, Text, View } from 'react-native';
import Web3 from 'web3'
import connection from '@Commons/Connection'
import Header from '@Widgets/Header'

  export default class ProfileView extends Component {

    componentDidMount() {

    }

    static navigationOptions = {
      header: null,
    };
  
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
  
    render() {

      return (
        <View>
       <Header title="PROFILE"/>
      </View>
      );
    }
  }

  
  
  