import { RestaurantLocation } from './../types';

export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS';
function requestRestaurants() {
  return {
    type: REQUEST_RESTAURANTS
  }

}

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
function receiveRestaurants(jsonRestaurants: RestaurantLocation[]) {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants: jsonRestaurants
  }

}

export function fetchRestaurants() {
  return function(dispatch: any) {
    dispatch(requestRestaurants());
    return fetch('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
      .then(response => response.json())
      .then((restaurants: RestaurantLocation[]) => {
        dispatch(receiveRestaurants(restaurants))
      })

  }

}
