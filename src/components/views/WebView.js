import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class ViewWeb extends Component {
  static navigationOptions = {
    header : null
  };


  render() {
    return (  
      <WebView
        source={{uri: this.props.navigation.getParam('url')}}
       
      />
    
    );
  }
}