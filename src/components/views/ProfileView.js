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
const data = [
  {
    id: 0,
    text: "Edit Profile",
    screen: "editprofile"
  },
  {
    id: 1,
    text: "Wallet Menu",
    screen: "walletmenu"
  },
  {
    id: 2,
    text: "Security Settings",
    screen: "securitysettings"
  }
];

export default class ProfileView extends Component {
  componentDidMount() {}

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "Loading...",
      email: "Loading...",
      tel: "Loading...",
      balance: 100.9
    };
  }

  renderItem = ({ item }) => {
    return (
      <UserMenuItem
        iconImage={item.iconImage}
        text={item.text}
        onPress={() =>
          this.props.navigation.navigate(item.screen)
        }
      />
    );
  };

  keyExtractor = ({ id }) => id.toString();

  _onPress = ({ item }) => {
    let view = this.state.item.screen;
    this.props.navigation.navigate(item.screen);
  };

  render() {
    return (
      <View>
        <LinearGradient colors={["#c264fe", "#a82ffc", "#7a08fa"]}>
          <Header title="PROFILE" />
        </LinearGradient>
        <ScrollView>
          <UserInfo
            name={this.state.name}
            email={this.state.email}
            tel={this.state.tel}
          />
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <Balance money={this.state.balance} />

          <View>
            <Text style={styles.spec}> </Text>
          </View>
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
