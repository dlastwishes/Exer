//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image ,FlatList ,ScrollView,TouchableOpacity,navigation} from "react-native";

// create a component


 class PromotionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        flatListData : [
            {
              Promotion: 1,
              images: require("@Commons/images/promotion1.png")
            },
            {
              Promotion: 2,
              images: require("@Commons/images/promotion1.png")
            },
            {
              Promotion: 3,
              images: require("@Commons/images/promotion1.png")
            }
          ]
        
    };
  }

  _onPress = ()=>{
    this.props.navigation.navigate("promotion");
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("promotion")}>
        <Image style={styles.picture} source={item.images} />
        </TouchableOpacity>
    );
  };
  
  

  render() {
    return (
      <View style={{paddingTop:10}}>
      <Text style={styles.label}>Promotions</Text>
      <ScrollView>

        <FlatList
          horizontal={true}
          data={this.state.flatListData}
          renderItem={this._renderItem}
        /></ScrollView>
        <View />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  menu: {
    height: 50,
    width: 50,
    padding: 5,
    borderWidth: 1,
    alignItems: "center"
  },
  label: {
    fontSize: 17,
    padding: 5
  },
  picture: {
    height: 150,
    width: 265,
    resizeMode: "stretch"
  }
});

//make this component available to the app
export default PromotionsList;