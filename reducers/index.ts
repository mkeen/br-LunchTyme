import { combineReducers } from 'redux'
import { fetchRestaurants } from './../actions'

import {
  REQUEST_RESTAURANTS,
  RECEIVE_RESTAURANTS
} from '../actions';
import { Restaurant } from '../types';

export interface RestaurantList {
  restaurants: any;
}

const restaurants = (
  state = {
    isFetching: false,
    restaurants: []
  },

  action: any
) => {
  switch (action.type) {
    case REQUEST_RESTAURANTS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_RESTAURANTS:
      return Object.assign({}, state, {
        isFetching: false,
        restaurants: action.restaurants.restaurants
      });

    default:
      return state
  }

}

export default combineReducers<RestaurantList>({
  restaurants
})
