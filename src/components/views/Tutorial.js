//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from "react-native";

// create a component
class Tutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.slide1}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("@Commons/images/runTT.png")}
          />
          <Text style={styles.text}>WALK N RUN!</Text>
        </View>
        <View style={styles.slide2}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("@Commons/images/rewardTT.png")}
          />
          <Text style={styles.text}>CLAIM REWARD</Text>
        </View>
        <Image
          style={{ width: 150, height: 150 }}
          source={require("@Commons/images/getcoinTT.png")}
        />
        <View style={styles.slide3}>
          <Text style={styles.text}>GET A EXP COIN</Text>
        </View>
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
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

//make this component available to the app
export default Tutorial;
