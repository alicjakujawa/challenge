import { combineReducers, createStore, compose } from 'redux';
import DevTools from '../containers/DevTools';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const enhancer = compose(
  DevTools.instrument()
);

const store = createStore(reducer, enhancer);
export default store;
