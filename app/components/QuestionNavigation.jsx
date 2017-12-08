const React = require('react');
const PropTypes = require('prop-types');

function QuestionNavigation({ questionNumber }) {
  return (
    <nav>
      { questionNumber !== 0 ? <button>Previous</button> : null }
      <button>Next</button>
    </nav>
  );
}

QuestionNavigation.propTypes = {
  questionNumber: PropTypes.number.isRequired,
};

module.exports = QuestionNavigation;
