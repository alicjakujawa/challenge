import { combineReducers, createStore, compose } from 'redux';
import DevTools from '../containers/DevTools';
import * as reducers from '../reducers';

const persistedState = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : {};

const reducer = combineReducers(reducers);
const enhancer = compose(
  DevTools.instrument()
);

const store = createStore(reducer, persistedState, enhancer);
export default store;
