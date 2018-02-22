import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ answers }) => (
  <p>
    Score: {answers.reduce((score, answer) =>
       (answer.user === answer.correct ? score + 1 : score), 0)}
    /{answers.length}
  </p>
);

Score.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string,
    correct: PropTypes.string,
    country: PropTypes.string,
  })).isRequired,
};

export default Score;
