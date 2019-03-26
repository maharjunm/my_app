import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TaxDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taxId: '',
    };
  }

  handleTextArea({ target }) {
    this.setState({ taxId: target.value });
  }

  render() {
    const { submit } = this.props;
    const { taxId } = this.state;
    return (
      <Fragment>
        <div className="form_header">
          <h2> Tax Details</h2>
        </div>
        <form>
                 Tax ID:
          {' '}
          <input value={taxId} onChange={e => this.handleTextArea(e)} />
          <button className="submit_button" type="button" onClick={submit}> Submit </button>
        </form>
      </Fragment>
    );
  }
}

TaxDetails.defaultProps = {
  submit: () => {},
};

TaxDetails.propTypes = {
  submit: PropTypes.func,
};

export default TaxDetails;
