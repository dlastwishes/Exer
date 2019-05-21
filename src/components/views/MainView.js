import React, { Component } from "react";
import {
  Icon,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";
import Web3 from "web3";
import connection from "@Commons/Connection";
import Header from "@Widgets/Header";
import { Pedometer } from "expo";
import AnimatedCircularProgress from "@Widgets/AnimatedCircularProgress";
import Modal from "react-native-modal";
import DailyGoals from "@Widgets/DailyGoals";
export default class MainView extends Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    visibleModal: false,
    visibleModalDG: false,
    circularFill: 0
  };

  renderModalContent = () => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>กำหนดเป้าหมาย</Text>
      <DailyGoals
        onPressclose={() => {
          this._onPressclose();
        }}
      />
      <Button
        onPress={() => this.setState({ visibleModal: false })}
        title="Close"
      />
    </View>
  );

  renderModalContentSuccess = () => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>สำเร็จ</Text>
      <Button onPress={() => this._onPress()} title="Close" />
    </View>
  );

  _onPress = () => {
    this.setState({ visibleModalDG: false });
  };

  _onPressclose = Dgoals => {
    this.setState({ visibleModal: false });
    this.setState({ visibleModalDG: "default" });
    // if(this.props.goal[0] === "5000"){
    console.log(Dgoals)
    if (Dgoals === 5000) {
      this.setState({ circularFill: 5000 });
    }
    if (Dgoals === 10000) {
      this.setState({ circularFill: 10000 });
    }
    if (Dgoals === 15000) {
      this.setState({ circularFill: 15000 });
    }

    // }
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

  _circularProgress = () => {};

  render() {
    return (
      <View>
        <Header title="EXER" />

        {/* <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text> */}
        <AnimatedCircularProgress
          size={360}
          width={15}
          fill={48.8}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#3d5875"
        >
          {fill => (
            <View>
              <Text style={styles.steps}>{this.state.pastStepCount} Steps</Text>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text>Goal: {this.state.pastStepCount}</Text>
                <TouchableHighlight
                  onPress={() => this.setState({ visibleModal: "default" })}
                >
                  <Image
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                    source={require("@Commons/images/editgoal.png")}
                  />
                </TouchableHighlight>
              </View>

              <View />
            </View>
          )}
        </AnimatedCircularProgress>
        <View>
          <Modal isVisible={this.state.visibleModal === "default"}>
            {this.renderModalContent()}
          </Modal>
          <Modal isVisible={this.state.visibleModalDG === "default"}>
            {this.renderModalContentSuccess()}
          </Modal>
        </View>
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
  },
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12
  }
});

Expo.registerRootComponent(MainView);
