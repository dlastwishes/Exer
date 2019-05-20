import React, { Component } from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection : 'column'
     
    },
    headerContainer : {
        flexDirection : 'column'
    },
    headerText : {
        color: '#FDFEFE',
        fontSize : 35,
        padding : 18,
        height : 75,
        backgroundColor: '#2874A6',
    },
    bottomBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 15,
      flexDirection: 'row',
    },
    url: {
      flex: 1,
    },
    urlText: {
      color: '#fff',
      fontSize: 20,
    },
    cancelButton: {
      marginLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cancelButtonText: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 18,
    },
  });


  export default styles