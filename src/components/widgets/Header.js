import React, { Component } from "react";
import { Icon, StyleSheet, Text, View } from 'react-native';
import Web3 from 'web3'
import connection from '@Commons/Connection'
import { LinearGradient } from "expo";
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
          <LinearGradient colors={["#0c056d", "#590d82"]}> 
        <Text style={styles.headerText}> {this.props.title}</Text>
        </LinearGradient>
      </View>
      );
    }
  }

  
  
  