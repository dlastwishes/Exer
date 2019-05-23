import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button
} from "react-native";
import styles from '@Commons/styles'


class DailyGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals : [5000,10000,15000]
    };
  }


  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPressSelectGoal(item);
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

export default DailyGoals;