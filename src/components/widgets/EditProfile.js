//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import t from "tcomb-form-native";

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
          <View style={{ backgroundColor: "white", width: 250, height: 50 }}>
            <Text
              style={{ color: "#a82ffc", fontSize: 25, textAlign: "center" }}
            >
              {" "}
              Close{" "}
            </Text>
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
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});

//make this component available to the app
export default EditProfile;
