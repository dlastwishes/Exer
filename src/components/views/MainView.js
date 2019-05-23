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
  TouchableOpacity,
  ScrollView
} from "react-native";
import Web3 from "web3";
import connection from "@Commons/Connection";
import Header from "@Widgets/Header";
import { Pedometer } from "expo";
import AnimatedCircularProgress from "@Widgets/AnimatedCircularProgress";
import Modal from "react-native-modal";
import DailyGoals from "@Widgets/DailyGoals";
import { LinearGradient } from "expo";
import PromotionsList from "@Widgets/PromotionsList";
import MianMenu from "@Widgets/MainMenu";
export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPedometerAvailable: "checking",
      pastStepCount: 0,
      currentStepCount: 0,
      visibleModal: false,
      visibleModalDG: false,
      circularfill: 0,
      datafill: 0
    };
  }

  renderModalContent = () => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Goal</Text>
      <DailyGoals
        onPressclose={Dgoals => {
          this._onPressclose(Dgoals);
          console.log("circularFill :" + this.state.circularfill);
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
      <Text style={styles.contentTitle}>Success</Text>
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
    console.log(Dgoals);
    if (Dgoals == 5000) {
      this.setState({ circularfill: 5000 });
    } else if (Dgoals == 10000) {
      this.setState({ circularfill: 10000 });
    } else if (Dgoals == 15000) {
      this.setState({ circularfill: 15000 });
    }

    this._circularFill();
  };

  _circularFill = () => {
    let stepfill = 0;
    if (this.state.circularfill == 5000) {
      stepfill = (this.state.pastStepCount / 5000) * 100;
      this.setState({ datafill: stepfill });
    } else if (this.state.circularfill == 10000) {
      stepfill = (this.state.pastStepCount / 10000) * 100;
      this.setState({ datafill: stepfill });
    } else if (this.state.circularfill == 15000) {
      stepfill = (this.state.pastStepCount / 15000) * 100;
      this.setState({ datafill: stepfill });
    }
    console.log(this.state.datafill);
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this._subscribe();
    this._circularFill();
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
        <LinearGradient colors={["#0c056d", "#590d82"]}> 
          <Header title="EXER" />
        </LinearGradient>

        {/* <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text> */}
        <ScrollView>
          <View style={styles.container}>
            <AnimatedCircularProgress
              size={300}
              width={18}
              fill={this.state.datafill}
              tintColor="#a82ffc"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="#313848"
            >
              {fill => (
                <View style={styles.dayFill}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("@Commons/images/running.png")}
                  />
                  <Text style={styles.steps}>
                    {this.state.pastStepCount} Steps
                  </Text>
                  <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Text style={{ color: "#313848", fontWeight: "bold" }}>
                      Goal {this.state.circularfill}
                    </Text>
                    <TouchableHighlight
                      onPress={() => this.setState({ visibleModal: "default" })}
                    >
                      <Image
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                        source={require("@Commons/images/edit.png")}
                      />
                    </TouchableHighlight>
                  </View>
                  <View />
                </View>
              )}
            </AnimatedCircularProgress>
          </View>
          <View>
            <MianMenu/>
          </View>
          <PromotionsList />
          <View>
          <Text>                              </Text>
          <Text>                              </Text>
          <Text>                              </Text>
          <Text>                              </Text>
          </View>

          
        </ScrollView>
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
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10
  },
  steps: {
    backgroundColor: "transparent",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    color: "#313848"
  },
  content: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  contentTitle: {
    fontSize: 20,
  },
  dayFill: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 10,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 250
  }
});

Expo.registerRootComponent(MainView);
