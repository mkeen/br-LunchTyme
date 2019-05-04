import React, { Component } from 'react';
import { StatusBar, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default class InternetsScreen extends React.Component {
  private deviceHeight = Dimensions.get('window').height;
  private deviceWidth = Dimensions.get('window').width;

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar backgroundColor="#43E895" barStyle="light-content" />
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          source={{ uri: 'https://www.bottlerocketstudios.com/contact' }}
          automaticallyAdjustContentInsets={false}
          style={{ width: this.deviceWidth, height: this.deviceHeight }}
        />
      </View>
    );
  }
}
