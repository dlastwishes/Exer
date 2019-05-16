import React, { Component } from "react";
import { Icon, StyleSheet, Text, View, ScrollView ,FlatList} from "react-native";
import Web3 from "web3";
import connection from "@Commons/Connection";
import Header from "@Widgets/Header";
import UserInfo from "@Widgets/UserInfo";
import Balance from "@Widgets/Balance";
import UserMenuItem from "@Widgets/UserMenuItem" ;
const data = [
  {
      id: 0,
      text: 'Edit Profile'
  },
  {
      id: 1,
      text: 'Wallet Menu'
  },
  {
      id: 2,
      text: 'Security Settings'
  },

]

export default class ProfileView extends Component {
  componentDidMount() {}

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({ item }) => {
    return (
      <UserMenuItem
        iconImage={item.iconImage}
        text={item.text}
        onPress={() => this._onPress(item.id)}
      />
    );
  };

  keyExtractor = ({ id }) => id.toString();

  _onPress = id => {
    console.log(id);
  };

  render() {
    return (
      <View>
        <Header title="PROFILE" />
        <ScrollView>
          <UserInfo
            name={"เอกวัฒน์ ปทุมรังษี"}
            email={"aekwatt@hotmail.com"}
            tel={"082-330-3825"}
          />
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <Balance money={"100.9"} />

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
