import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Table from '../components/Table';

class TableContainer extends Component {
  render() {
    return (
      <div>
        <h1>Table</h1>
        <Table />
      </div>
    );
  }
}

TableContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(TableContainer);
