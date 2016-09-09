import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPost } from '../actions/PostActions';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';


class FormContainer extends Component {
  render() {
    return (
      <div className="wrapper">
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              placeholder="Type username"
            />
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Type post title"
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default connect()(FormContainer);
