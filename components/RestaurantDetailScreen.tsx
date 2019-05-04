import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import { Restaurant } from '../types';

export default class RestaurantDetailScreen extends React.Component<any, any> {
  navigation = this.props.navigation;
  restaurant: Restaurant = this.navigation.getParam('restaurant');

  address() {
    if (this.restaurant.location && this.restaurant.location.formattedAddress) {
      return (
        <View style={styles.mainText}>
          {this.restaurant.location.formattedAddress.map((addressLine, index) => <Text key={index}>{addressLine}</Text>)}
        </View>
      );

    } else {
      return;
    }

  }

  phone() {
    if (this.restaurant.contact && this.restaurant.contact.formattedPhone) {
      return (
        <View style={styles.secondaryText}>
          <Text>{this.restaurant.contact.formattedPhone}</Text>
        </View>
      );

    } else {
      return;
    }

  }

  twitter() {
    if (this.restaurant.contact && this.restaurant.contact.twitter) {
      return (
        <View style={styles.secondaryText}>
          <Text>@{this.restaurant.contact.twitter}</Text>
        </View>
      );
    } else {
      return;
    }

  }

  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          region={{
            latitude: this.restaurant.location.lat,
            longitude: this.restaurant.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{ latitude: this.restaurant.location.lat, longitude: this.restaurant.location.lng }}
          />
        </MapView>

        <View style={styles.titleStrip}>
          <Text style={styles.titleText}>{this.restaurant.name}</Text>
          <Text style={styles.categoryText}>{this.restaurant.category}</Text>
        </View>

        {this.address()}
        {this.phone()}
        {this.twitter()}

      </View>

    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 180
  },

  titleStrip: {
    backgroundColor: '#34B379',
    height: 60,
    justifyContent: 'center',
    paddingLeft: 12
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  },

  categoryText: {
    fontSize: 12,
    color: '#ffffff'
  },

  mainText: {
    fontSize: 16,
    paddingLeft: 12,
    paddingTop: 16
  },

  secondaryText: {
    paddingTop: 26,
    fontSize: 16,
    paddingLeft: 12
  }

});
