//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import t from "tcomb-form-native";
// create a component

const Form = t.form.Form;

const edit = t.struct({
  // put your code here
  Name: t.String,
  PrivateKey: t.String
});

const options = {};

class FirstPage extends Component {
  constructor(props) {
    super(props);
    // put your code here
    this.state = {
      value: {
        Name: "",
        PrivateKey: "adsdasdadasd"
      }
    };
  }
  _onPress = () => {
    const value = this.refs.form.getValue();
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref="edit" type={edit} options={options} />
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

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

//make this component available to the app
export default FirstPage;
