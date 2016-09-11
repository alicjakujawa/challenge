import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPost } from '../actions/PostActions';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import moment from 'moment';

class FormContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addRecord = this.addRecord.bind(this);
  }

  handleChange(e) {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  addRecord(e) {
    e.preventDefault();
    const post = {
      username: this.state.name,
      title: this.state.title,
      views: 0,
      likes: 0,
      created: moment().format('YYYY-MM-DD'),
    };
    this.props.dispatch(addPost(post));
  }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.addRecord}>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              placeholder="Type username"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
            />
          </FormGroup>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Type post title"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
            />
          </FormGroup>
          <Button type="submit">
            Add record
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(FormContainer);
