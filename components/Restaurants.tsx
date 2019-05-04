import React, { Component } from 'react';
import { Restaurant } from '../types';
import RestaurantPreview from './RestaurantPreview';
import { StyleSheet, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

interface RestaurantListProps {
  restaurants: Restaurant[];
}

export default class Restaurants extends React.Component<any, RestaurantListProps> {
  render() {
    return (
      <View style={DeviceInfo.isTablet() ? styles.containerWide : {}}>
        {this.props.restaurants.map(
          (restaurant: Restaurant) =>
            <RestaurantPreview
              style={DeviceInfo.isTablet() ? styles.childWide : {}}
              navigate={this.props.navigate}
              key={restaurant.name}
              restaurant={restaurant} />
        )}
      </View>
    );

  }

}

const styles = StyleSheet.create({
  containerWide: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },

  childWide: {
    width: '50%'
  }

})
