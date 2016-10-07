import React, { Component, PropTypes } from 'react';

import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class RowNumberController extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.changeLimit(e.target.value);
  }

  render() {
    return (
      <FormGroup>
        <FormControl componentClass="select" onChange={this.handleChange}>
          {[5, 10, 15].map((count, i) => {
            return <option key={i} value={count}>{count}</option>;
          })}
        </FormControl>
      </FormGroup>
    );
  }
}

RowNumberController.propTypes = {
  changeLimit: PropTypes.func.isRequired,
};

export default RowNumberController;
