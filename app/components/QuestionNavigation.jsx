const React = require('react');
const PropTypes = require('prop-types');

function QuestionNavigation({ question }) {
  return (
    <nav>
      { question.number !== 0 ? <button>Previous</button> : null }
      { question.number !== question.total - 1 ? <button>Next</button> : null }
      { question.number === question.total - 1 ? <button>Submit</button> : null }
    </nav>
  );
}

QuestionNavigation.propTypes = {
  question: PropTypes.shape({
    number: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
};

module.exports = QuestionNavigation;
