//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
// create a component

class Balance extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 , flexDirection:'row' }}>
          <Image
            style={{ width: 25, height: 25 , marginRight:8 }}
            source={require("@Commons/images/balance.png")}
          />
          <Text style={[styles.font, { fontSize: 16 }]}>Balance</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={[
              styles.font,
              { fontSize: 16 },
              { fontWeight: "bold" },
              { color: "#a82ffc" }
            ]}
          >
            {" "}
            {this.props.money}
          </Text>
          <Text style={[styles.font, { fontSize: 16 }, { fontWeight: "bold" }]}>
            {" "}
            EXP{" "}
          </Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15
  }
});

//make this component available to the app
export default Balance;
