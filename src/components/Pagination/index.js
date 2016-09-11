import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/lib/Button';
import { next, prev } from '../../actions/PostActions';

class Pagination extends Component {
  render() {
    const { nextPage, prevPage } = this.props;
    return (
      <div>
        {nextPage ?
          <Button onClick={() => { this.props.dispatch(next()); }}>
            Next page
          </Button> : null
        }
        {prevPage ?
          <Button onClick={() => { this.props.dispatch(prev()); }}>
            Prev page
          </Button> : null
        }
      </div>
    );
  }
}

Pagination.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nextPage: PropTypes.bool.isRequired,
  prevPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  nextPage: state.posts.nextPage,
  prevPage: state.posts.prevPage,
});

export default connect(mapStateToProps)(Pagination);
