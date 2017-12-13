const React = require('react');
const PropTypes = require('prop-types');
const questions = require('../country-data');

function QuestionHeader({ questionNumber, countryName }) {
  return (
    <h2>
      {questionNumber.current + 1}&#47;{questionNumber.total}.
      What is the capital city of {countryName}?
    </h2>
  );
}

QuestionHeader.propTypes = {
  questionNumber: PropTypes.shape({
    current: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  countryName: PropTypes.string.isRequired,
};

function SelectAnswer({ options }) {
  return (
    <div className="select-answer">
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

function QuestionNavigation({ questionNumber }) {
  return (
    <nav>
      { questionNumber.current !== 0 ? <button>Previous</button> : null }
      { questionNumber.current !== questionNumber.total - 1 ? <button>Next</button> : null }
      { questionNumber.current === questionNumber.total - 1 ? <button>Submit</button> : null }
    </nav>
  );
}

QuestionNavigation.propTypes = {
  questionNumber: PropTypes.shape({
    number: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
};

function Question({ question, questionNumber }) {
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
      />
    </fieldset>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionNumber: PropTypes.shape({
    number: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
};

function Quiz() {
  const currentQuestion = 4;
  return (
    <main>
      <h1>Capital Cities Quiz</h1>
      <form>
        <Question
          question={questions[currentQuestion]}
          questionNumber={{ current: currentQuestion, total: questions.length }}
        />
        <QuestionNavigation
          questionNumber={{ current: currentQuestion, total: questions.length }}
        />
      </form>
    </main>
  );
}

module.exports = Quiz;
