import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as config from '../config/cards.json';
import NameDetails from '../basicPages/NameDetails';
import CompanyDetails from '../basicPages/CompanyDetails';

export default class BasicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardNumber: 0,
    };
    this.components = {
      NameDetails,
      CompanyDetails,
    };
  }

  submit(context) {
    const { activeCardNumber } = this.state;
    context.setState({ activeCardNumber: activeCardNumber + 1 });
  }

  loadRelatedData() {
    const { activeCardNumber } = this.state;
    const { submit } = this.props;
    const component = this.components[config.basicDetails[activeCardNumber]];
    const props = {};
    if (config.basicDetails.length - 1 === activeCardNumber) {
      props.mainSubmit = () => submit();
    }
    props.submit = () => this.submit(this);
    return React.createElement(component, props, null);
  }

  render() {
    return (
      <Fragment>
        <div className="form_header">
          <h2> Basic Details</h2>
        </div>
        {this.loadRelatedData()}
      </Fragment>
    );
  }
}


BasicDetails.defaultProps = {
  submit: () => {},
};

BasicDetails.propTypes = {
  submit: PropTypes.func,
};
