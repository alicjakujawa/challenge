import React, { Component, PropTypes } from 'react';
import './style.sass';
import Table from 'react-bootstrap/lib/Table';
import Pagination from '../Pagination';
import RowNumberController from '../RowNumberController';

class PostsTable extends Component {

  componentWillMount() {
    this.props.actions.load();
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
        <div className="row">
          <div className="col-xs-1">
            <RowNumberController changeLimit={this.props.actions.changeLimit} />
          </div>
        </div>
      </div>
    );
  }
}

PostsTable.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
};

export default PostsTable;
