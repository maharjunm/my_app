import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

class CompanyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
    };
  }

  submitBasicDetails() {
    const { companyName } = this.state;
    const { addCompanyDetails, submit, mainSubmit } = this.props;
    addCompanyDetails({ name: companyName });
    submit();
    if (!mainSubmit) {
      return;
    }
    mainSubmit();
  }

  handleChange({ target }) {
    this.setState({ companyName: target.value });
  }

  render() {
    const { companyName } = this.state;
    const { name } = this.props;
    return (
      <Fragment>
        <form>
                Company Name:
          {' '}
          <input value={name || companyName} onChange={!name && (e => this.handleChange(e))} />
          {(name === '') && <button className="submit_button" type="button" onClick={() => this.submitBasicDetails()}> Submit </button>}
        </form>
      </Fragment>
    );
  }
}

CompanyDetails.defaultProps = {
  submit: () => {},
  addCompanyDetails: () => {},
  mainSubmit: () => {},
  name: '',
};

CompanyDetails.propTypes = {
  submit: PropTypes.func,
  addCompanyDetails: PropTypes.func,
  mainSubmit: PropTypes.func,
  name: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    addCompanyDetails: data => dispatch(actions.addCompanyDetails(data)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CompanyDetails);
