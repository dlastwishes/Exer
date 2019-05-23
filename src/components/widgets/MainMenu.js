//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from "react-native";

// create a component
class MainMenu extends Component {
  _onPressButton = () => {};
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <View
            style={{
              flexDirection: "row",
              width: 150,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{ width: 18, height: 18 , alignContent:'center' ,alignItems:'center' }}
              source={require("@Commons/images/medal1.png")}
            />
            <Text style={{ color: "#FFFF" }}> Claim Reward </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.click} onPress={this._onPressButton}>
            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("@Commons/images/ethereum.png")}
              />
              <Text> Buy ETH </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.click} onPress={this._onPressButton}>
            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("@Commons/images/qr-code.png")}
              />
              <Text> My QR </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.click} onPress={this._onPressButton}>
            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("@Commons/images/balance.png")}
              />
              <Text> My Balance </Text>
            </View>
          </TouchableOpacity>
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
    paddingTop: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#930077",
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  click: {
    alignItems: "center",
    padding: 10,
    margin: 10
  }
});

//make this component available to the app
export default MainMenu;
