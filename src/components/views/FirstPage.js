import React, { Component } from "react";
import {AsyncStorage, Icon, StyleSheet,Alert, Text, View  , TextInput} from 'react-native';
import {web3 , exer , exerAddress} from '@Commons/Connection'
import Header from '@Widgets/Header'
import TransferInput from '@Widgets/TransferInput'
import Transaction from '@Commons/utils/transaction'


  export default class FirstPage extends Component {

    componentWillMount() {
    
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
        <View style={{flexDirection:'column'}}>
        <Text> Hello World</Text>
      </View>
      );
    }
  }

  
  
  