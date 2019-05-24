import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';
import styles from '@Commons/styles'

  
  export default class Tutorial extends Component {

    static navigationOptions = {
        header: null
      };

    render(){
      return (

        <Swiper style={styles.wrapper} showsButtons={true}>

         <View style={styles.slide1}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("@Commons/images/runTT.png")}
          />
          <Text style={styles.text}>WALK N RUN!</Text>
        </View>

        <View style={styles.slide2}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("@Commons/images/rewardTT.png")}
          />
          <Text style={styles.text}>CLAIM REWARD</Text>
        </View>
        <View style={styles.slide3}>
        <Image
          style={{ width: 150, height: 150 }}
          source={require("@Commons/images/getcoinTT.png")}
        />
      
          <Text style={styles.text}>GET A EXP COIN</Text>
        </View>
        </Swiper>
      );
    }
  }
  