import React, {Component} from 'react';
import {View, TouchableOpacity , Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Vault from '@Commons/providers/vault'

export default class ShowQR extends Component {
  static navigationOptions = {
    header : null
  };


  constructor(props) {
    super(props);
    this.state = {
        address : ""
    };
  }


  render() {
      var logoFile = require('@Commons/images/logo.png');
    return (
        <View style={{alignItems : 'center'}}> 
     
          <QRCode
           value={this.props.address}
            logo={logoFile}
            logoSize={50}
            size={250}
      />
       <TouchableOpacity onPress={this.props.onPressCloseQR}>
       <View style={{backgroundColor : 'white' , width:250 , height:50}}> 
       <Text style={{color:'#a82ffc',fontSize:25, textAlign : 'center'}}> Close </Text>
       </View>
      
    </TouchableOpacity>
        </View>
      
    );
  }
}