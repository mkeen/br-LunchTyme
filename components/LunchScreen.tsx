import React, { Component, Dispatch } from 'react';
import { StatusBar, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { RestaurantsState } from './../store';
import { fetchRestaurants } from './../actions';
import { RestaurantList } from './../reducers';
import RestaurantPreview from './RestaurantPreview';
import Restaurants from './Restaurants';
import { Restaurant } from '../types';

class LunchScreen extends React.Component<any, RestaurantList> {
  componentDidMount() {
    const { fetchRestaurants } = this.props;
    this.props.fetchRestaurants();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (

      <ScrollView>
        <StatusBar backgroundColor="#43E895" barStyle="light-content" />
        <Restaurants
          navigate={navigate}
          restaurants={this.props.restaurants.restaurants.restaurants} />
      </ScrollView>
    );

  }

}

const mapStateToProps = (state: RestaurantsState) => {
  return { restaurants: state.restaurants };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchRestaurants() {
      dispatch(fetchRestaurants())
    }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LunchScreen);
