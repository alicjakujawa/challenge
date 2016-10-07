import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/PostActions';
import PostsTable from '../components/Table';

class TableContainer extends Component {
  render() {
    const { posts } = this.props;
    return (
      <PostsTable
        posts={posts}
        actions={this.props.actions}
      />
    );
  }
}

TableContainer.propTypes = {
  posts: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
