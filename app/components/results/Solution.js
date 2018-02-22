import React from 'react';
import PropTypes from 'prop-types';

const Solution = ({ answer }) => (
  <tr>
    <td>{answer.country}</td>
    <td>{answer.correct}</td>
    <td>{answer.user}</td>
  </tr>
);

Solution.propTypes = {
  answer: PropTypes.shape({
    user: PropTypes.string,
    correct: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default Solution;
