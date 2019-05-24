import React, { Component } from "react";
import { Icon, StyleSheet, Alert, Text, View, ActivityIndicator } from "react-native";
import { web3, exer, exerAddress } from "@Commons/Connection";
import Header from "@Widgets/Header";
import TransferInput from "@Widgets/TransferInput";
import Transaction from "@Commons/utils/transaction";

export default class TransferView extends Component {
  componentWillMount() {}

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onPress = (destination, amount) => {
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

            if (web3.utils.isAddress(destination)) {
            Transaction.transferExp(destination, (amount*100000000));
            } else {
              Alert.alert('Invalid Address')
            }
          }
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={{ flexDirection: "column" }}>
        <View>
          <Header title="TRANSFER EXP" />
        </View>
        <View>
          <TransferInput
            onPressSend={(destination, amount) => {
              this._onPress(destination, amount);
            }}
          />
        </View>
      </View>
    );
  }
}
