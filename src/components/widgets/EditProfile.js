//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import t from "tcomb-form-native";

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
      }
    }
  };

const options = {
  fields: {
    PrivateKey: {
      editable: false,
      stylesheet: multilineStyle,
      multiline: true,
    }
  }
};
class EditProfile extends Component {
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

  render() {
    return (
      <View style={styles.content}>
        <Form ref="edit" type={edit} options={options} />
        <TouchableOpacity onPress={this.props.onPressCloseEditProfile}>
          <View style={styles.button}>
            <Text style={{ color: "#FFFF" }}> SAVE </Text>
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
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  content: {
    justifyContent: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
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
export default EditProfile;
