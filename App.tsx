import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, HeaderBackButton, NavigationRouteConfig } from 'react-navigation';
import LunchScreen from './components/LunchScreen';
import InternetsScreen from './components/InternetsScreen';
import { Provider } from 'react-redux';
import store from './store';
import RestaurantDetailScreen from './components/RestaurantDetailScreen';

const StackNav = createStackNavigator({
  lunch: {
    screen: LunchScreen,
    navigationOptions: {
      tabBarIcon: <Image style={{ height: 25, width: 25 }} source={require('./static/tab_lunch.png')} />
    },

  },

  details: {
    screen: RestaurantDetailScreen,
    navigationOptions: ({ navigation }: { navigation: NavigationRouteConfig }) => ({
      headerLeft: <HeaderBackButton tintColor="#ffffff" onPress={() => navigation.goBack(null)} />,
    })

  }

}, {
    headerLayoutPreset: 'center',

    defaultNavigationOptions: {
      headerRight: (
        <Image style={{ height: 30, width: 30, marginRight: 16 }} source={require('./static/icon_map.png')} />
      ),

      headerStyle: {
        backgroundColor: '#43E895',
        color: '#FFFFFF',
        elevation: 0,
      },

      headerTitleStyle: {
        color: 'white',
        fontFamily: 'AvenirNextLTPro-Demi',
        fontWeight: 'bold',
        fontSize: 17
      },

      title: 'Lunch Tyme'
    }
  })

const AppContainer = createAppContainer(StackNav);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );

  }

}
