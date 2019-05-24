import React, { Component } from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection : 'column'
    },
    containerLanding : {
        flex: 1,
        justifyContent: 'center'
    },
    containerFirstPage: {
      flex: 1,
      justifyContent: "center",
      margin: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#930077",
      padding: 10,
      margin: 10,
      borderRadius: 5
    },
    headerContainer : {
        flexDirection : 'column'
    },
    headerText : {
        color: '#FDFEFE',
        fontSize : 35,
        padding : 18,
        height : 75
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
    
    // Goal Step
    containerStep: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2c3e50"
    }
    ,
    content: {
      width:150,
    },
    contentTitle: {
      fontSize: 20
    },
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }

  });


  export default styles