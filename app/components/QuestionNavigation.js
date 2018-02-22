import React from 'react';
import PropTypes from 'prop-types';

const QuestionNavigation = (props) => {
  const {
    questionNumber,
    onNext,
    onPrevious,
    onSubmit,
  } = props;

  return (
    <nav>
      { questionNumber.current !== 0 &&
        <button onClick={onPrevious}>Previous</button> }

      { questionNumber.current !== questionNumber.total - 1 &&
        <button onClick={onNext}>Next</button> }

      { questionNumber.current === questionNumber.total - 1 &&
        <button onClick={onSubmit}>Submit</button> }
    </nav>
  );
};

QuestionNavigation.propTypes = {
  questionNumber: PropTypes.shape({
    number: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default QuestionNavigation;
