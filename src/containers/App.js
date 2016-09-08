import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TableContainer from './TableContainer';
import DevTools from './DevTools';
import store from '../store/configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TableContainer />
          {__DEV__ && <DevTools />}
        </div>
      </Provider>
    );
  }
}
