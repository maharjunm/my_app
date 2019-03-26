import React, { Component } from 'react';
import './App.css';
import config from './config/invitation.json';
import constants from './constants/constants.json';
import BasicDetails from './invitation/BasicDetails';
import Address from './invitation/Address';
import TaxDetails from './invitation/TaxDetails';
import ReviewDetails from './invitation/ReviewDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabNumber: 0,
    };
    this.components = {
      BasicDetails,
      Address,
      TaxDetails,
      ReviewDetails,
    };
  }

  getList() {
    const { activeTabNumber } = this.state;
    return config.Invitation.map((tabName, index) => (
      <div className="tab" key={tabName}>
        <div className={`item ${activeTabNumber >= parseInt(index, 0) ? 'item_background' : ''}`}>
          {' '}
          {index + 1}
          {' '}
        </div>
        <div className="tab_name">{constants[tabName]}</div>
      </div>
    ));
  }

  loadRelatedData() {
    const { activeTabNumber } = this.state;
    return React.createElement(
      this.components[config.Invitation[activeTabNumber]],
      { submit: () => this.submit(this) },
      null,
    );
  }

  submit(context) {
    const { activeTabNumber } = this.state;
    context.setState({ activeTabNumber: activeTabNumber + 1 });
  }

  render() {
    return (
      <div className="root">
        <h1 className="header">Invitation</h1>
        <div className="list">
          {this.getList()}
        </div>
        <div className="basic_info">
          {this.loadRelatedData()}
        </div>
      </div>
    );
  }
}

export default App;
