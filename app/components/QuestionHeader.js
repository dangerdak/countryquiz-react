import React from 'react';
import PropTypes from 'prop-types';

const QuestionHeader = ({ questionNumber, countryName }) => (
  <h2>
    {questionNumber.current + 1}&#47;{questionNumber.total}.
    What is the capital city of {countryName}?
  </h2>
);

QuestionHeader.propTypes = {
  questionNumber: PropTypes.shape({
    current: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  countryName: PropTypes.string.isRequired,
};

export default QuestionHeader;
