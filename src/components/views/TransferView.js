import React, { Component } from "react";
import {AsyncStorage, Icon, StyleSheet,Alert, Text, View  , TextInput} from 'react-native';
import {web3 , exer , exerAddress} from '@Commons/Connection'
import Header from '@Widgets/Header'
import TransferInput from '@Widgets/TransferInput'
import Transaction from '@Commons/utils/transaction'
import Vault from '@Commons/providers/vault'


  export default class TransferView extends Component {

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
  
    _onPress  = (destination , amount) => {
      if(web3.utils.isAddress(destination)){
        Transaction.transferExp(destination , amount)
      }
      else{
        console.log('Invalid Address')
      }
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

  
  
  