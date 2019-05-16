import React, { Component } from "react";
import {
  Icon,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Image,
  Button
} from "react-native";
import Web3 from "web3";
import connection from "@Commons/Connection";
import Header from "@Widgets/Header";
import { Pedometer } from "expo";
import AnimatedCircularProgress from "@Widgets/AnimatedCircularProgress";
export default class MainView extends Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    modalVisible: false
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();

    // start.setDate(end.getDate() - 0.7);
    start.setHours(0, 0, 0, 0);
    console.log("start: " + start);
    console.log("end: " + end);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Header title="EXER" />

        {/* <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text> */}
        <AnimatedCircularProgress
          size={270}
          width={15}
          fill={48.8}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#3d5875"
        >
          {fill => (
            <View >
              <Text style={styles.steps}>{this.state.pastStepCount} Steps</Text>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text>Goal: {this.state.pastStepCount}</Text>

                <View style={{ backgroundColor: "#F9F6F5" , marginTop:0 }}>
                  <Modal
                    style={{height: 300, width: 360, marginLeft: 1 }}
                    animationType="none"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                    }}
                  >
                    <View style={{height: 300, width: 360, marginLeft: 1 }}>
                      <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                          onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                          }}
                        >
                          <Text>Hide Modal</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </Modal>

                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(true);
                    }}
                  >
                    <Image
                      style={{ width: 25, height: 25, marginLeft: 5 }}
                      source={require("@Commons/images/editgoal.png")}
                    />
                  </TouchableHighlight>
                </View>
              </View>

              <Button title="Reward" />
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  steps: {
    backgroundColor: "transparent",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10
  }
});
