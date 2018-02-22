import React from 'react';
import PropTypes from 'prop-types';

import Solution from './Solution';

const Solutions = ({ answers }) => (
  <table>
    <thead>
      <tr>
        <th>Country</th>
        <th>Capital</th>
        <th>Your Answer</th>
      </tr>
    </thead>
    <tbody>
      {answers.map(answer => <Solution key={answer.country} answer={answer} />)}
    </tbody>
  </table>
);

Solutions.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string,
    correct: PropTypes.string,
    country: PropTypes.string,
  })).isRequired,
};

export default Solutions;
