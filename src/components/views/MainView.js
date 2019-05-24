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
import Header from "@Widgets/Header";
import Transaction from "@Commons/utils/transaction";
import { Pedometer } from "expo";
import AnimatedCircularProgress from "@Widgets/AnimatedCircularProgress";
import Modal from "react-native-modal";
import DailyGoals from "@Widgets/DailyGoals";
import Vault from '@Commons/providers/vault'
import { exer ,web3 } from "@Commons/Connection";
import PromotionsList from "@Widgets/PromotionsList";
import MainMenu from "@Widgets/MainMenu";
import ShowQR from '@Widgets/ShowQR'

export default class MainView extends Component {
  static navigationOptions = {
    header: null
  };


  constructor(props) {
    super(props);
    this.state = {
      isPedometerAvailable: "checking",
      pastStepCount: 0,
      visibleModal: false,
      visibleModalDG: false,
      circularfill: 0,
      goalStep: 0,
      qrcodeVisible : false,
      address : "",
      expbalance : 0,
      ethbalance : 0
    };
  }

  renderModalContent = () => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Select your goal</Text>
      <DailyGoals
        onPressSelectGoal={Dgoals => {
          this._onPressSelectGoal(Dgoals);
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
      <Text style={styles.contentTitle}>Good luck</Text>
      <Button onPress={() => this._onPress()} title="Close" />
    </View>
  );

  _onPress = () => {
    this.setState({ visibleModalDG: false });
  };

  _circularFill = async (goal) => {
    let stepfill = (this.state.pastStepCount / goal) * 100;
      this.setState({ circularfill: stepfill });
    Vault.setDataToVault('goalStep' ,goal )
  };


  _onPressSelectGoal =async (goal) => {
    this.setState({ visibleModal: false });
    this.setState({ visibleModalDG: "default" });
    this.setState({goalStep : goal})
    this._circularFill(goal);
  };

  componentWillMount() {
  this._getGoalStep().then( () => {
    this._getAddress().then(() =>{
      this._getBalance()
    })
  })
  }

  _getAddress = async () => {
    let address = await Vault.getAccount();
    this.setState({address : address.address})
}

_getBalance = async () => {
  exer.methods.balanceOf(this.state.address)
  .call({ from: this.state.address }, (err, res) => {
    if (!err) {
     let result = web3.utils.hexToNumberString(res._hex);
   
     this.setState({expbalance : result/100000000})
    }
  });
  web3.eth.getBalance( this.state.address , (err ,res) => {
    if(!err) {
     
      this.setState({ethbalance : parseFloat(res/1000000000000000000).toFixed(5) })
    }
  })
}


  _getGoalStep = async () => {
    let goal = await Vault.getGoalStep()
    if(goal){
      this._circularFill(goal)
      this.setState({goalStep : goal.toString()})
    }
  }

  componentDidMount() {
    this._getGoalStep().then( () => {
      this._getAddress().then(() =>{
        this._getBalance()
      })
      
    })
    this._subscribe();
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      this._subscribe();
    });
   
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {

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

  _onPressClaim = async () => {
    if(parseInt(this.state.pastStepCount) >= parseInt(this.state.goalStep)){
      Alert.alert(
        "Confirm Transaction",
        "Confirm to claim EXP reward",
        [
          {
            text: "Cancel",
            onPress: () => {
              Alert.alert('Cancel Transaction')
            },
            style: "cancel"
          },
          {
            text: "Confirm",
            onPress: async () => {
              var name = await Vault.getNameProfile();
              if(name != null){
                Transaction.claimExp(this.state.pastStepCount , name )
              }
              else{
                Alert.alert('Not found you name profile')
              }
            
            }
          }
        ],
        { cancelable: false }
      );
    }
    else{
      Alert.alert('Your goal not finish')
    }
 
  }

  _onPressBuyETH = () => {
    this.props.navigation.navigate('viewWeb' , {url : 'https://payments.changelly.com/' })
  }

  _onPressMyQR = () => {
    this.setState({qrcodeVisible:true})
  }

  _onPressBalance = () => {
    this._getBalance()
      Alert.alert(
        "Account Balances"+'\n',
        "EXP Balances : "+this.state.expbalance+" EXP"+"\n\n"+"ETH Balances : "+this.state.ethbalance+" ETH",
        [
          {
            text: "OK",
          }
        ],
        { cancelable: false }
      );
    

  }

  _onPressCloseQR = () => {
    this.setState({qrcodeVisible:false})
  }
  
  _circularProgress = () => {};

  render() {
    return (
      <View>
          <Header title="EXER" />
        <ScrollView>
          <View style={styles.container}>
            <AnimatedCircularProgress
              size={300}
              width={18}
              fill={this.state.circularfill}
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
                      Goal {this.state.goalStep}
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
            <MainMenu 
              onPressClaim={ () => {
                this._onPressClaim()
              }}
              onPressBuyETH={ () => {
                this._onPressBuyETH()
              }}
              onPressMyQR = { () => {
                this._onPressMyQR()
              }}
              onPressBalance = { () => {
                this._onPressBalance()
              }}
            />
          </View>
          <PromotionsList navigation={this.props.navigation} />
          <View>
          <Text>                              </Text>
          <Text>                              </Text>
          <Text>                              </Text>
          <Text>                              </Text>
          </View>

          
        </ScrollView>
        <View>
        <Modal isVisible={this.state.qrcodeVisible}>
           <ShowQR address={this.state.address} onPressCloseQR={() => {
             this._onPressCloseQR()
           }} />
          </Modal>
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