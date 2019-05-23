//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableHighlight } from "react-native";
import t from "tcomb-form-native";
// create a component

const Form = t.form.Form;

const edit = t.struct({
  // put your code here
  Name: t.String,
  PrivateKey: t.String
});

const options = {
    fields: {
        PrivateKey: {
          editable: false
        }
      },
};

class Editprofile extends Component {
  constructor(props) {
    super(props);
    // put your code here
    this.state = {
      value: {
        Name: "",
        PrivateKey: ""
      }
    };
  }

  static navigationOptions = {
    tabBarVisible: false
  };

  _onPress = () => {
    const value = this.refs.form.getValue();
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref="edit" type={edit} options={options} />
        <TouchableHighlight
          onPress={() => {
            this._onPress();
          }}
        >
          <Text>Save</Text>
        </TouchableHighlight>
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
export default Editprofile;
