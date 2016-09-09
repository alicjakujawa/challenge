import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { load } from '../actions/PostActions';
import PostsTable from '../components/Table';

class TableContainer extends Component {
  render() {
    const { posts } = this.props;
    return (
      <PostsTable
        posts={posts}
        loadPosts={() => this.props.loadPosts()}
      />
    );
  }
}

TableContainer.propTypes = {
  posts: PropTypes.object.isRequired,
  loadPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  loadPosts: bindActionCreators(load, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
