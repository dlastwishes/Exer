import React, { Component } from "react";
import {
  Icon,
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
import { LinearGradient } from "expo";
import Modal from "react-native-modal";
import EditProfile from '@Widgets/EditProfile'
const data = [
  {
      id: 0,
      text: 'Edit Profile' ,
  },
  {
      id: 1,
      text: 'Wallet Menu',
  },
  {
    id: 2,
    text: 'Tutorial',
},

]

export default class ProfileView extends Component {
  componentDidMount() {}

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "Loading...",
      address: "Loading...",
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
          if (item.id == 0) this._onPressEdit();
          else if (item.id == 1) this.props.navigation.navigate("walletmenu");
          else if (item.id == 2) this.props.navigation.navigate("tutorial");
        }}
      />
    );
  };

  keyExtractor = ({ id }) => id.toString();

  _onPress = ({ item }) => {
    let view = this.state.item.screen;
    this.props.navigation.navigate(item.screen);
  };

  _onPressCloseEdit = () => {
    this.setState({ editVisible: false });
  };

  _onPressEdit = () => {
    this.setState({editVisible:true})
  }

  render() {
    return (
      <View>
        <LinearGradient colors={["#c264fe", "#a82ffc", "#7a08fa"]}>
          <Header title="PROFILE" />
        </LinearGradient>
        <ScrollView>
          <UserInfo name={this.state.name} address={this.state.address} />
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <Balance money={this.state.balance} />

          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <Modal isVisible={this.state.editVisible}>
            <EditProfile
              onPressCloseEditProfile={() => {
                this._onPressCloseEdit();
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
