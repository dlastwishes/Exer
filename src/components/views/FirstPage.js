import React, { Component } from "react";
import {
  AsyncStorage,
  Icon,
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import Vault from '@Commons/providers/vault'
import t from "tcomb-form-native";
import styles from '@Commons/styles'
import {web3} from '@Commons/Connection'

const Form = t.form.Form;

const edit = t.struct({
  name: t.String,
  privatekey: t.String
});

const multilineStyle = {
  ...Form.stylesheet,
  textbox: {
    ...Form.stylesheet.textbox,
    normal: {
      ...Form.stylesheet.textbox.normal,
      height: 100
    },
    error: {
      ...Form.stylesheet.textbox.error,
      height: 100
    }
  }
};

const options = {
  fields: {
    name : {
      placeholder : 'Input your surname and lastname'
    },
    privatekey: {
      stylesheet: multilineStyle,
      multiline: true,
      placeholder : "Input your private key's ethereum account"
    }
  }
};


export default class FirstPage extends Component {

  componentWillMount() {

  }

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: {
        Name: "",
        PrivateKey: ""
      }
    };
  }

  _onPress = () => {
    const value = this.refs.form.getValue();
    if(value){
          Vault.setDataToVault("nameProfile" , (value.name).toString())
          Vault.setPrivateKey((value.privatekey).toString());
          Vault.setDataToVault("gasPrice", 20);
          this.props.navigation.navigate("Maintab")
    }
    else{
      Alert.alert('Please insert your data')
    }
  };

  render() {
    return (
        <View style={styles.containerFirstPage}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ width: 150, height: 50 }}
            source={require("@Commons/images/logoExer.png")}
          />
        </View>

        <Form ref="form" type={edit} options={options} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this._onPress()
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: 150,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5
            }}
          >
            <Text style={{ color: "#FFFF" }}> START EXER </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
