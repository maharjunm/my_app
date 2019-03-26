/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as config from '../config/fieldsConfig.json';
import getStoreValue from '../utils/parser';
import NameDetails from '../basicPages/NameDetails';
import CompanyDetails from '../basicPages/CompanyDetails';

class ReviewDetails extends Component {
  constructor(props) {
    super(props);
    this.components = {
      NameDetails,
      CompanyDetails,
    };
  }

  loadComponents() {
    return config.ReviewDetails.components.map((componentName) => {
      const props = {};
      Object.keys(config.ReviewDetails.config[componentName]).forEach((key) => {
        props[key] = this.props[key];
      });
      return React.createElement(this.components[componentName], props);
    });
  }

  render() {
    return (
      <div>
        <h2> Check Details Before submitting </h2>
        <div className="supplier_details">
          {this.loadComponents()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const list = {};
  Object.keys(config.ReviewDetails.config).forEach((componentName) => {
    const componentConfig = config.ReviewDetails.config[componentName];
    Object.keys(componentConfig).forEach((key) => {
      const str = componentConfig[key];
      list[key] = getStoreValue(state, str);
    });
  });
  return list;
}

export default connect(mapStateToProps)(ReviewDetails);
