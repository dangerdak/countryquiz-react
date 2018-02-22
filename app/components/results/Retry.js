import React from 'react';
import PropTypes from 'prop-types';

const Retry = ({ onRetry }) => (
  <button onClick={onRetry}>
    Retry
  </button>
);

Retry.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default Retry;
