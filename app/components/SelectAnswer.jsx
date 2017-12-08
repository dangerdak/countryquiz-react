const React = require('react');
const PropTypes = require('prop-types');

function SelectAnswer({ options }) {
  return (
    <ul>
      {options.map(option => <li key={option}>{option}</li>)}
    </ul>
  );
}

SelectAnswer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

module.exports = SelectAnswer;
