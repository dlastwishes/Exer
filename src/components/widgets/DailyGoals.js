//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button
} from "react-native";
import Modal from "react-native-modal";


const goals = [15000,10000,5000];

class DailyGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals : [5000,10000,15000],
      goal: 'Loading...',
      visibleModal: false ,
      visibleModalDG : false,
      circularFill : 0,
      Dgoals : 0
    };
  }

  _onPress = () =>{
    this.setState({ visibleModalDG: false  })
    
  }




  // renderModalContent = () => (
  //   <View style={styles.content}>
  //     <Text style={styles.contentTitle}>สำเร็จ</Text>
  //     <Button
  //       onPress={() => this._onPress()}
  //       title="Close"
  //     />
  //   </View>
  // );

  renderItem = ({ item }) => {

    console.log("renderItem "+ item)
    // if(item == 15000){
    //   this.setState({ Dgoals: 15000  })
    // }else if(item == 10000){
    //   this.setState({ Dgoals: 10000  })
    // }else if(item == 5000){
    //   this.setState({ Dgoals: 5000  })
    // }
    return (
      <TouchableOpacity
      onPress={ ()=>{
        this.props.onPressclose(item)}
      }
      >
        <Text style={styles.contentTitle}>{item} ก้าว</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ width: 100, height: 100 }}>
        <FlatList data={this.state.goals} renderItem={this.renderItem} />
        {/* <Modal isVisible={this.state.visibleModalDG === "default"}>
            {this.renderModalContentSuccess()}
          </Modal> */}
      </View>
      
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
  ,
  content: {
    backgroundColor: "white",
    padding: 15,
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

//make this component available to the app
export default DailyGoals;
