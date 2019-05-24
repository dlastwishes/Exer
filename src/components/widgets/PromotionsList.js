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
              promotion: 1,
              images: require("@Commons/images/promotion1.png")
            },
            {
              promotion: 2,
              images: require("@Commons/images/promotion2.png")
            },
            {
              promotion: 3,
              images: require("@Commons/images/promotion3.png")
            }
          ]
        
    };
  }


  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => 
      {
        if(item.promotion == 1){
          this.props.navigation.navigate('viewWeb' , {url : 'https://www.truemoney.com/retail-arabitia/?utm_source=inapp'})
        }
        else if(item.promotion == 2){
          this.props.navigation.navigate('viewWeb' , {url : 'https://www.truemoney.com/retail-jungle/?utm_source=inapp'})
        }
        else if(item.promotion == 3){
          this.props.navigation.navigate('viewWeb' , {url : 'https://www.truemoney.com/retail-arabitia/?utm_source=inapp'})
        }
        }
        }>
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
    fontSize: 11,
    padding: 5
  },
  picture: {
    height: 150,
    width: 265,
    resizeMode: "stretch",
    borderRadius: 3,
    margin: 2,
  }
});

//make this component available to the app
export default PromotionsList;