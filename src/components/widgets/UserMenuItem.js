import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Font, AppLoading } from "expo";

class UserMenuItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.5}>
        <View style={styles.container}>
          <Text style={styles.text}> {this.props.text} </Text>
        </View>
        <Text style={styles.spec}></Text>
      </TouchableOpacity>
    );
  }
}

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

export default UserMenuItem;