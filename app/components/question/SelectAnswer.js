import React from 'react';
import PropTypes from 'prop-types';

const SelectAnswer = ({ options, userAnswer, onSelect }) => (
  <div className="select-answer">
    {options.map(option =>
        (
          <label htmlFor={option} key={option}>
            <input
              type="radio"
              id={option}
              name="answerOption"
              value={option}
              checked={option === userAnswer}
              onChange={onSelect}
            />
            {option}
          </label>
        ))}
  </div>
);

SelectAnswer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  userAnswer: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SelectAnswer;
