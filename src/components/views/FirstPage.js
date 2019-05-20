import React, { Component } from "react";
import {AsyncStorage, Icon, StyleSheet,Alert, Text, View  , TextInput} from 'react-native';
import {web3 , exer , exerAddress} from '@Commons/Connection'
import Header from '@Widgets/Header'
import TransferInput from '@Widgets/TransferInput'
import Transaction from '@Commons/utils/transaction'


  export default class FirstPage extends Component {

    componentWillMount() {
      Vault.setDataToVault('gasPrice' , 20)
      Vault.setPrivateKey("AAC9A3D1E2FB2A1C58F41376203E8C766A5656ECA7347BE0355470F0A1C6B6C2")
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

  
  
  