import React, { Component } from "react";
import { TouchableOpacity, Alert, StyleSheet, Text, View  , TextInput} from 'react-native';
import Web3 from 'web3'
import connection from '@Commons/Connection'
import Header from '@Widgets/Header'
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
  
    render() {

      return (
        <View style={{flexDirection : 'column' , marginTop:100}}>
        <View style={{padding:10}}> 
        <Text style={{fontSize:20}}> Destination Address</Text>
        </View>
        <View style={{padding:10}}> 
        <TextInput style={{fontSize:20}} placeholder="Input Address"/>
        </View>
        <View style={{padding:10}}> 
        <Text style={{fontSize:20}}> Amount</Text>
        </View>
        <View style={{padding:10}}> 
        <TextInput keyboardType='number-pad' style={{fontSize:20}} placeholder="Input Address"/>
        </View>
        <View style={{alignItems:'center' , marginTop : 10}}> 
      <TouchableOpacity onPress={this.props.onPressSend}> 
        <Text style={{fontSize:20 , padding:10 ,
         color:'white', width:150 , height:50, textAlign:'center'
         , backgroundColor:'#2874A6' , borderRadius:10 , borderWidth:1}}> 
        Send EXP
        </Text>
      </TouchableOpacity>
        </View>
      </View>
      );
    }
  }

  
  
  