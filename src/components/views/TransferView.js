import React, { Component } from "react";
import {AsyncStorage, Icon, StyleSheet,Alert, Text, View  , TextInput} from 'react-native';
import {web3 , exer , exerAddress} from '@Commons/Connection'
import Header from '@Widgets/Header'
import TransferInput from '@Widgets/TransferInput'
import Transaction from '@Commons/utils/transaction'
import Vault from '@Commons/providers/vault'


  export default class TransferView extends Component {

    componentWillMount() {
      Vault.setDataToVault('gasPrice' , 20)
      Vault.setPrivateKey("AAC9A3D1E2FB2A1C58F41376203E8C766A5656ECA7347BE0355470F0A1C6B6C2").then(() => {
        Transaction.claimExp(5000 , "dlastwishes");
      })
    }

    static navigationOptions = {
      header: null,
    };
  
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
  
    _onPress  = (destination , amount) => {
      
    }

    render() {
       
      return (
        <View style={{flexDirection:'column'}}>
        <View> 
        <Header title="TRANSFER EXP" />
        </View>
       <View> 
       <TransferInput onPressSend={(destination , amount) => {this._onPress(destination , amount)}}/>
       </View>
    
      </View>
      );
    }
  }

  
  
  