//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View
            style={{ flexDirection: "row", paddingBottom: 12, paddingTop: 15 }}
          >
            <Image
              style={{ width: 18, height: 18 }}
              source={require("@Commons/images/name.png")}
            />
            <Text
              style={[
                {
                  fontSize: 19,
                  fontWeight: "bold",
                  marginLeft:10 
                }
              ]}
            >
              {this.props.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row" , paddingBottom: 12, paddingTop: 15}}>
            <Image
              style={{ width: 18, height: 18}}
              source={require("@Commons/images/envelope.png")}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={[{ fontSize: 16 ,marginLeft:10 }]}>{this.props.email}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" , paddingBottom: 12, paddingTop: 15}}>
            <Image
              style={{ width: 18, height: 18}}
              source={require("@Commons/images/smartphone.png")}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={[{ fontSize: 16,marginLeft:10  }]}>{this.props.tel}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// C6C6C6

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row"
  },
  subContainer: {
    flex: 5,
    flexDirection: "column",
    paddingLeft: 45
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  image: {
    height: 50,
    width: 50,
  },
  font: {
    paddingBottom: 5
  }
});

//make this component available to the app
export default UserInfo;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDzG_kCoV8-T2l-RpaTLPY8dfyMx1boIFY",
//     authDomain: "reactnative-todo-13e75.firebaseapp.com",
//     databaseURL: "https://reactnative-todo-13e75.firebaseio.com",
//     projectId: "reactnative-todo-13e75",
//     storageBucket: "reactnative-todo-13e75.appspot.com",
//     messagingSenderId: "925908861936",
//     appId: "1:925908861936:web:f01dce0857f088bc"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>