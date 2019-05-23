import React, { Component } from "react";
import {
  AsyncStorage,
  Icon,
  StyleSheet,
  Alert,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { web3, exer, exerAddress } from "@Commons/Connection";
import Header from "@Widgets/Header";
import TransferInput from "@Widgets/TransferInput";
import Transaction from "@Commons/utils/transaction";
import Vault from '@Commons/providers/vault'
import t from "tcomb-form-native";
import styles from '@Commons/styles'

const Form = t.form.Form;

const edit = t.struct({
  Name: t.String,
  PrivateKey: t.String
});

const formStyles = {
  ...Form.stylesheet, // copy over all of the default styles
  formGroup: {
    normal: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: "blue",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {};

export default class FirstPage extends Component {
  componentWillMount() {
    Vault.setDataToVault("gasPrice", 20);
    Vault.setPrivateKey(
      "AAC9A3D1E2FB2A1C58F41376203E8C766A5656ECA7347BE0355470F0A1C6B6C2"
    );
  }

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: {
        Name: "",
        PrivateKey: "adsdasdadasd"
      }
    };
  }

  _onPress = () => {
    const value = this.refs.form.getValue();
    if(value){

    }
  };

  render() {
    return (
      <View style={styles.containerFirstPage}>
        <Form ref="edit" type={edit} options={options} data={this.state.value} />
        <TouchableOpacity
          onPress={() => {
            this._onPress();
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Maintab");
          }}
        >
          <Text>FirstPage</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
