import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from "react-native";
import Header from "@Widgets/Header";
import UserInfo from "@Widgets/UserInfo";
import Balance from "@Widgets/Balance";
import UserMenuItem from "@Widgets/UserMenuItem";
import Vault from "@Commons/providers/vault";
import Modal from "react-native-modal";
import { exer ,web3 } from "@Commons/Connection";
import EditProfile from '@Widgets/EditProfile'

const data = [
  {
    id: 0,
    text: "Edit Profile"
  },
  {
    id: 2,
    text: "Tutorial"
  },
  {
    id: 3,
    text: "Unlink Account"
  }
];

export default class ProfileView extends Component {

  componentWillMount() {
    this._loadData()
   
  }

  _loadData = async () => {
    this._getAddress().then(() => {
      this._getBalance().then( () => {
        this._getNameProfile()
      })
      
    })
  }
  componentDidMount(){
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      this._loadData()
    });

  }

  _getAddress = async () => {
    let address = await Vault.getAccount();
    this.setState({address : address.address})
}

_getNameProfile = async () => {
  let name = await Vault.getNameProfile();
  this.setState({name : name});
}

  _getBalance = async () => {
    exer.methods
      .balanceOf(this.state.address)
      .call({ from: this.state.address }, (err, res) => {
        if (!err) {
          let result = web3.utils.hexToNumberString(res._hex);

          this.setState({ balance: result / 100000000 });
        }
      });
  };

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "Loading...",
      address: "",
      balance: "Loading...",
      editVisible : false,
    };
  }

  renderItem = ({ item }) => {
    return (
      <UserMenuItem
        iconImage={item.iconImage}
        text={item.text}
        onPress={() => {
          if (item.id == 0) {
            this._onPressEdit();
          }
          else if (item.id == 2) this.props.navigation.navigate("tutorial");
          else if (item.id == 3) {
            Alert.alert(
              "Confirm Unlink Account",
              "Confirm to unlink from your account",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                {
                  text: "Confirm",
                  onPress: () => {
                    Vault.logout();
                    this.props.navigation.navigate("FirstPage");
                  }
                }
              ],
              { cancelable: false }
            );
          }
        
        }}
      />
    );
  };

  keyExtractor = ({ id }) => id.toString();

  _onPress = ({ item }) => {
    let view = this.state.item.screen;
    this.props.navigation.navigate(item.screen);
  };

  _onPressCloseEdit = async (name) => {
    if(name != "" || name != null){
    console.log(name)
      Vault.editNameProfile(name);
    }
    else{
      Alert.alert("Input your new name")
    }
    this.setState({ editVisible: false });
   
  };

  _onPressEdit = () => {
    this.setState({editVisible:true})
  }

  render() {
    return (
      <View>
        <Header title="PROFILE" />
        <ScrollView>
          <UserInfo
            name={this.state.name}
            address={this.state.address}
          />
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <Balance money={this.state.balance} />

          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <Modal isVisible={this.state.editVisible}>
            <EditProfile
              name={this.state.name}
              address={this.state.address}
              onPressCloseEditProfile={(name) => {
                this._onPressCloseEdit(name);
              }}
            />
          </Modal>
          <View>
            <FlatList
              data={data}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spec: {
    backgroundColor: "#F8F8F8"
  }
});
