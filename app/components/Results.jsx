const React = require('react');
const PropTypes = require('prop-types');

function Score({ answers }) {
  return (
    <p>
      Score: {answers.user.reduce((acc, answer, index) =>
         (answer === answers.correct[index] ? acc + 1 : acc), 0)}
      /{answers.correct.length}
    </p>
  );
}

Score.propTypes = {
  answers: PropTypes.shape({
    user: PropTypes.arrayOf(PropTypes.string),
    correct: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};


function Results({ answers }) {
  return (
    <Score answers={answers} />
  );
}

module.exports = Results;
