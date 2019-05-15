import React, { Component } from "react";
import { Icon, StyleSheet,Alert, Text, View  , TextInput} from 'react-native';
import Web3 from 'web3'
import connection from '@Commons/Connection'
import Header from '@Widgets/Header'
import TransferInput from '@Widgets/TransferInput'
  export default class TransferView extends Component {

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
  
    _onPress() {
      Alert.alert('hello world')
    }
    render() {

      return (
        <View style={{flexDirection:'column'}}>
        <View> 
        <Header title="TRANSFER EXP" />
        </View>
       <View> 
       <TransferInput onPressSend={() => this._onPress()}/>
       </View>
    
      </View>
      );
    }
  }

  
  
  