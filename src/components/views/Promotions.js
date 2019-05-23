//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
class Promotions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PromotionDetail: [
        {
          key: 1,
          detail : "test1"
        },
        {
          key: 2,
          detail : "test1"
        },
        {
          key: 3,
          detail : "test1"
        }
      ]
    };
  }

  componentDidMount() {
    // put your code here

  }

  _renderItem = ({ item }) => {
    return (
        <Image style={styles.picture} source={item.images} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Promotions</Text>
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
  }
});

//make this component available to the app
export default Promotions;
