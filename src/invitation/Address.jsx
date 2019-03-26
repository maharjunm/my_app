import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
  }

  handleTextArea({ target }) {
    this.setState({ address: target.value });
  }

  render() {
    const { address } = this.state;
    const { submit } = this.props;
    return (
      <Fragment>
        <div className="form_header">
          <h2> Address Details</h2>
        </div>
        <form>
                Address:
          {' '}
          <textarea value={address} onChange={e => this.handleTextArea(e)} />
          <button className="submit_button" type="button" onClick={submit}> Submit </button>
        </form>
      </Fragment>
    );
  }
}


Address.defaultProps = {
  submit: () => {},
};

Address.propTypes = {
  submit: PropTypes.func,
};
