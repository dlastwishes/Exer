//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Font, AppLoading } from "expo";
import Modal from "react-native-modal";


class UserMenuItem extends Component {
  constructor(props) {
    super(props);
    // put your code here
    this.state = {
      
    };
  }

  static navigationOptions = {
    tabBarVisible: false
  };

  _onPress = () => {
    const value = this.refs.form.getValue();
  };

  renderModalContent = () => (
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

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.5}>
        <View style={styles.container}>
          <Text style={styles.text}> {this.props.text} </Text>
        </View>
        <Text style={styles.spec} />
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15
  },
  imageContainer: {
    padding: 3,
    justifyContent: "center",
    alignContent: "center"
  },
  image: {
    height: 40,
    width: 40
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: "left",
    textAlignVertical: "center"
  },
  spec: {
    backgroundColor: "#F8F8F8"
  }
});

//make this component available to the app
export default UserMenuItem;