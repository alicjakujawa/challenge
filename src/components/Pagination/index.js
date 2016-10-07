import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/lib/Button';
import { next, prev } from '../../actions/PostActions';
import './style.sass';

class Pagination extends Component {
  render() {
    const { nextPage, prevPage } = this.props;
    return (
      <div className="pagin">
        {nextPage ?
          <Button className="btn-primary pagin__button--next" onClick={() => { this.props.dispatch(next()); }}>
            <span className="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true" />
          </Button> : null
        }
        {prevPage ?
          <Button className="btn-primary pagin__button" onClick={() => { this.props.dispatch(prev()); }}>
            <span className="glyphicon glyphicon glyphicon-menu-left" aria-hidden="true" />
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
