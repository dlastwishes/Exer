import React, { Component } from "react";
import {
  Alert,
  View
} from "react-native";
import { BarCodeScanner, Permissions } from "expo";
import {web3 } from '@Commons/Connection'
import styles from "@Commons/styles";
import Header from "@Widgets/Header";

export default class QRView extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      lastScannedUrl: null
    };
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  _handleBarCodeRead = result => {
    console.log(result.data)
    if(web3.utils.isAddress(result.data)){
      
    }
    else{
        Alert.alert('Invalid Address')
    }
  };

  render() {
    return (
      <View style={styles.container}>
      <View>
      <Header title="Scan QR Code " />
      </View>
      <View style={{marginTop:55}}> 
      <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{
              height: 300,
              width: 400,
            }}
          />
      </View>
       
      </View>
    );
  }
  
}
