//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={[ { fontSize: 19, fontWeight: "bold" }]}>
            {this.props.name}
          </Text>
          <View style={{ flexDirection: "row" ,paddingBottom: 5}}>
            <Text style={[{ fontSize: 16 }]}>{this.props.email}</Text>
          </View>
          <View style={{ flexDirection: "row" , paddingBottom: 5 }}>
            <Text style={[{ fontSize: 16 }]}>{this.props.tel}</Text>
          </View>
        </View>
      </View>
    );
  }
}

// C6C6C6

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row"
  },
  subContainer: {
    flex: 5,
    flexDirection: "column",

  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  image: {
    height: 50,
    width: 50,
    marginTop: 10
  },
  font: {
    paddingBottom: 5
  }
});

//make this component available to the app
export default UserInfo;
