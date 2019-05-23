//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button
} from "react-native";
import Modal from "react-native-modal";

const goals = [15000, 10000, 5000];

class DailyGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [5000, 10000, 15000],
      goal: "Loading...",
      visibleModal: false,
      visibleModalDG: false,
      circularFill: 0,
      Dgoals: 0
    };
  }

  _onPress = () => {
    this.setState({ visibleModalDG: false });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPressclose(item);
        }}
      >
        <View style={styles.content}>
          <Text style={styles.contentTitle}>{item} Step</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ width: 100, height: 100 }}>
        <FlatList data={this.state.goals} renderItem={this.renderItem} />
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
    width:150,
    
  },
  contentTitle: {
    fontSize: 20
  }
});

//make this component available to the app
export default DailyGoals;
