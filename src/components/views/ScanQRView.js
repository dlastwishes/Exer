import React, { Component } from "react";
import {
  StatusBar,
  Dimensions,
  LayoutAnimation,
  TouchableOpacity,
  Alert,
  Linking,
  Icon,
  StyleSheet,
  Text,
  View
} from "react-native";
import { BarCodeScanner, Permissions } from "expo";
import styles from "@Commons/styles";
import Header from "@Widgets/Header";

export default class QRView extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      lastScannedUrl: null
    };
  }

  componentDidMount() {
    this._requestCameraPermission();
  }



  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  _handleBarCodeRead = result => {
    console.log(result.data)
  };

  render() {
    return (
      <View style={styles.container}>
      <View>
      <Header title="Scan QR Code " />
      </View>
      <View style={{marginTop:55}}> 
      <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{
              height: 300,
              width: 400,
            }}
          />
      </View>
       
      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      "Open this URL?",
      this.state.lastScannedUrl,
      [
        {
          text: "Yes",
          onPress: () => Linking.openURL(this.state.lastScannedUrl)
        },
        { text: "No", onPress: () => {} }
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  
}
