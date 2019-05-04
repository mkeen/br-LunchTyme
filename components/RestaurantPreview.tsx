import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { Restaurant } from '../types';

interface RestaurantPreviewProps {
  restaurant: Restaurant;
}

export default class RestaurantPreview extends React.Component<any, RestaurantPreviewProps> {
  render() {
    return (
      <View style={{ height: 280, ...this.props.style }}>
        <TouchableHighlight
          onPress={() => this.props.navigate('details', { restaurant: this.props.restaurant })}>

          <ImageBackground source={{ uri: this.props.restaurant.backgroundImageURL }}
            style={styles.backgroundImage}>

            <Image source={require("./../static/cellGradientBackground.png")}
              style={styles.gradientEffect} />

            <View style={styles.restaurantInfo}>
              <Text style={styles.title}>{this.props.restaurant.name}</Text>
              <Text style={styles.category}>{this.props.restaurant.category}</Text>
            </View>

          </ImageBackground>
        </TouchableHighlight>
      </View >
    );

  }

}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%'
  },

  gradientEffect: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },

  restaurantInfo: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 17,
    paddingBottom: 6
  },

  title: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold'
  },

  category: {
    fontSize: 12,
    color: '#ffffff'
  }

});
