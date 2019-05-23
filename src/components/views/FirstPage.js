//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";
import t from "tcomb-form-native";
// create a component

const Form = t.form.Form;

const edit = t.struct({
  // put your code here
  Name: t.String,
  PrivateKey: t.String
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
    PrivateKey: {
      stylesheet: multilineStyle,
      multiline: true,
    }
  }
};

class FirstPage extends Component {
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
  _onPress = () => {
    const value = this.refs.form.getValue();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ width: 150, height: 50 }}
            source={require("@Commons/images/logoExer.png")}
          />
        </View>

        <Form ref="edit" type={edit} options={options} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Maintab")
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

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#930077",
    padding: 10,
    margin: 10,
    borderRadius: 5
  }
});

//make this component available to the app
export default FirstPage;
