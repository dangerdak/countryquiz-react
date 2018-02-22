import React from 'react';
import PropTypes from 'prop-types';

import Solutions from './Solutions';
import Score from './Score';
import Retry from './Retry';

const Results = ({ answers, onRetry }) => (
  <div>
    <Score answers={answers} />
    <Solutions answers={answers} />
    <Retry onRetry={onRetry} />
  </div>
);

Results.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string,
    correct: PropTypes.string,
    country: PropTypes.string,
  })).isRequired,
  onRetry: PropTypes.func.isRequired,
};

module.exports = Results;
