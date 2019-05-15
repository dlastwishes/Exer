import React, { Component } from "react";
import { Icon, StyleSheet, Text, View } from 'react-native';
import Web3 from 'web3'
import connection from '@Commons/Connection'
import styles from '@Commons/styles'

  export default class Header extends Component {

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
        <View style={styles.headerContainer}>
        <Text style={styles.headerText}> {this.props.title}</Text>
      </View>
      );
    }
  }

  
  
  