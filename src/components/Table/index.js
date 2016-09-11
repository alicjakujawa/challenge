import React, { Component, PropTypes } from 'react';
import './style.sass';
import Table from 'react-bootstrap/lib/Table';
import Pagination from '../Pagination';

class PostsTable extends Component {

  componentWillMount() {
    this.props.loadPosts();
  }

  render() {
    return (
      <div className="wrapper">
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>User name</th>
              <th>Post title</th>
              <th>Views</th>
              <th>Likes</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.items ? this.props.posts.items.map((post, i) =>
              <tr key={i}>
                <th>{post.id}</th>
                <th>{post.username}</th>
                <th>{post.title}</th>
                <th>{post.views}</th>
                <th>{post.likes}</th>
                <th>{post.created}</th>
              </tr>
            ) : null}
          </tbody>
        </Table>
        <Pagination />
      </div>
    );
  }
}

PostsTable.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

export default PostsTable;
