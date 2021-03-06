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
          <View
            style={{ flexDirection: "row", paddingBottom: 12, paddingTop: 15 }}
          >
            <Image
              style={{ width: 18, height: 18 }}
              source={require("@Commons/images/namePf.png")}
            />
            <Text
              style={[
                {
                  fontSize: 16,
                  marginLeft: 10
                }
              ]}
            >
              {this.props.name}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", paddingBottom: 12, paddingTop: 15 }}
          >
            <Image
              style={{ width: 18, height: 18 }}
              source={require("@Commons/images/address.png")}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={[{ fontSize: 16, marginLeft: 10 }]}>
                {this.props.address}
              </Text>
            </View>
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
    paddingLeft: 10
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  image: {
    height: 50,
    width: 50
  },
  font: {
    paddingBottom: 5
  }
});

 
export default UserInfo;