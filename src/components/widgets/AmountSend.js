//import liraries
import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class AmountSend extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      amount: ""
    };
  }

  onChange(value) {
    console.log(value);
    this.setState({ name: value });
  }

  render() {
    return (
      <View style={styles.content}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          editable={false}
          placeholder={this.props.address}
        />

        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => this.setState({amount : text})}
          placeholder="Amount to send (EXP)"
        />

        <TouchableOpacity
          onPress={() => {
            this.props.onPressSend(this.state.amount);
          }}
        >
          <View style={styles.button}>
            <Text style={{ color: "#FFFF" }}> Send </Text>
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
export default AmountSend;
