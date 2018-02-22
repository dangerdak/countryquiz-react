import React from 'react';
import PropTypes from 'prop-types';

import QuestionHeader from './QuestionHeader';
import SelectAnswer from './SelectAnswer';

const Question = (props) => {
  const {
    question,
    userAnswer,
    questionNumber,
    onSelect,
  } = props;
  return (
    <fieldset>
      <legend>
        <QuestionHeader
          countryName={question.name}
          questionNumber={questionNumber}
        />
      </legend>
      <SelectAnswer
        options={question.options}
        userAnswer={userAnswer}
        onSelect={onSelect}
      />
    </fieldset>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  questionNumber: PropTypes.shape({
    number: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  userAnswer: PropTypes.string.isRequired,
};

export default Question;
