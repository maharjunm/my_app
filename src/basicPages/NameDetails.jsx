/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fieldConfig from '../config/fieldsConfig.json';
import * as actions from '../actions/actions';

class NameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      PhoneNumber: '',
    };
  }

  submitBasicDetails() {
    const { Name, PhoneNumber } = this.state;
    const { addBasicDetails, submit, mainSubmit } = this.props;
    addBasicDetails({ Name, PhoneNumber });
    submit();
    if (!mainSubmit) {
      return;
    }
    mainSubmit();
  }

  handleChange({ target }, question) {
    if (question === 'Name') {
      this.setState({ Name: target.value });
    } else {
      this.setState({ PhoneNumber: target.value });
    }
  }

  loadQuestions() {
    return fieldConfig.NameDetails.Questions.map((question) => {
      const value = this.props[question] ? this.props[question] : this.state[question];
      return (
        <div key={question} className="input_box">
          {question}
          {' '}
:
          <input className={question === 'Name' ? 'input_name' : ''} value={value} onChange={e => this.handleChange(e, question)} />
        </div>
      );
    });
  }

  render() {
    const { Name, PhoneNumber } = this.props;
    return (
      <div>
        <form>
          {this.loadQuestions()}
          {!Name && !PhoneNumber && <button className="submit_button" type="button" onClick={() => this.submitBasicDetails()}> Submit </button>}
        </form>
      </div>
    );
  }
}

NameDetails.defaultProps = {
  submit: () => {},
  mainSubmit: () => {},
  addBasicDetails: () => {},
  Name: '',
  PhoneNumber: '',
};

NameDetails.propTypes = {
  submit: PropTypes.func,
  addBasicDetails: PropTypes.func,
  mainSubmit: PropTypes.func,
  Name: PropTypes.string,
  PhoneNumber: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    addBasicDetails: data => dispatch(actions.addBasicDetails(data)),
  };
}

export default connect(null, mapDispatchToProps)(NameDetails);
