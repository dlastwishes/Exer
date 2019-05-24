import React, { Component } from "react";
import {
  Alert,
  View
} from "react-native";
import { BarCodeScanner, Permissions } from "expo";
import {web3 } from '@Commons/Connection'
import styles from "@Commons/styles";
import Modal from "react-native-modal";
import Header from "@Widgets/Header";
import AmountSend from '@Widgets/AmountSend'
import Transaction from "@Commons/utils/transaction";

export default class QRView extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      lastScannedUrl: null,
      amountVisible : false,
      destination : "",
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
      this.setState({destination : result.data , amountVisible : true})
    }
    else{
        Alert.alert('Invalid Address')
    }
  };

  _onPressSend = async (amount) => {
    Alert.alert(
      "Confirm Transaction",
      "Confirm to transfer your EXP(Exer Point)",
      [
        {
          text: "Cancel",
          onPress: () => {
            Alert.alert('Cancel Transaction')
          },
          style: "cancel"
        },
        {
          text: "Confirm",
          onPress: () => {

            if (web3.utils.isAddress(this.state.destination)) {
            Transaction.transferExp(this.state.destination, (amount*100000000));
            } else {
              Alert.alert('Invalid Address')
            }
            this.setState({amountVisible : false})
          }
        }
      ],
      { cancelable: false }
    );
  }

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
      <Modal isVisible={this.state.amountVisible}>
            <AmountSend address={this.state.destination} onPressSend={(amount) => { 
                  this._onPressSend(amount);
            }}/>
          </Modal>
      </View>
    );
  }
  
}

console.disableYellowBox = true;
