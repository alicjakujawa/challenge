import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import store from '../store/configureStore';

import TableContainer from './TableContainer';
import FormContainer from './FormContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TableContainer />
          <FormContainer />
          {__DEV__ && <DevTools />}
        </div>
      </Provider>
    );
  }
}
