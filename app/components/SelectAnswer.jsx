const React = require('react');
const PropTypes = require('prop-types');

function SelectAnswer({ options }) {
  return (
    <div>
      {options.map(option =>
          (
            <label htmlFor={option} key={option}>
              <input type="radio" id={option} name="answerOption" value={option} />
              {option}
            </label>
          ))}
    </div>
  );
}

SelectAnswer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

module.exports = SelectAnswer;
