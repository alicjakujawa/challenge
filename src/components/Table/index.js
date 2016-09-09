import React, { Component, PropTypes } from 'react';
import './style.sass';

class Table extends Component {

  componentWillMount() {
    this.props.loadPosts();
  }

  render() {
    return (
      <header className="header">
        <div>Table</div>
      </header>
    );
  }
}

Table.propTypes = {
  loadPosts: PropTypes.func.isRequired,
};

export default Table;
