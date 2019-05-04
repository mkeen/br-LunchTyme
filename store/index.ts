import { createStore, combineReducers, applyMiddleware } from 'redux'
import restaurants, { RestaurantList } from './../reducers'
import thunk from 'redux-thunk'

export interface RestaurantsState {
  restaurants: RestaurantList
}

export default createStore(combineReducers<RestaurantsState>({
  restaurants
}), applyMiddleware(thunk))
