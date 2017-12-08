const React = require('react');
const PropTypes = require('prop-types');

function QuestionHeader(props) {
  return (
    <h2>
      {props.question.number + 1}&#47;{props.question.total}.
      What is the capital city of {props.countryName}?
    </h2>
  );
}

QuestionHeader.propTypes = {
  question: PropTypes.shape({
    number: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  countryName: PropTypes.string.isRequired,
};

module.exports = QuestionHeader;
