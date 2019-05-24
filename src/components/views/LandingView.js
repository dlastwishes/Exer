import React, { Component } from "react";
import {
 ActivityIndicator,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import styles from '@Commons/styles'
import Vault from '@Commons/providers/vault'


export default class LandingView extends Component {

  componentWillMount() {
   this._checkAccount()
  }

  _checkAccount = async () => {
      console.log('hello ')
    let address = await Vault.getPrivateKey();
    if(address != null){
        this.props.navigation.navigate('Maintab')
    } else {
        this.props.navigation.navigate('FirstPage')
    }
  }

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: {
      
      }
    };
  }


  render() {
    return (
        <View style={styles.containerLanding}>
       <ActivityIndicator size={40}/>
      </View>
    );
  }
}
