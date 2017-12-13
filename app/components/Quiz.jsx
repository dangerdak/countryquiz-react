const React = require('react');
const PropTypes = require('prop-types');
const questions = require('../country-data');

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

function Question({ questionNumber }) {
  return (
    <fieldset>
      <legend>
        <QuestionHeader
          countryName={questions[questionNumber].name}
          question={{ number: questionNumber, total: questions.length }}
        />
      </legend>
      <SelectAnswer
        options={questions[questionNumber].options}
      />
    </fieldset>
  );
}

Question.propTypes = {
  questionNumber: PropTypes.number.isRequired,
};

function Quiz() {
  const questionNumber = 4;
  return (
    <main>
      <h1>Capital Cities Quiz</h1>
      <form>
        <Question questionNumber={questionNumber} />
        <QuestionNavigation
          question={{ number: questionNumber, total: questions.length }}
        />
      </form>
    </main>
  );
}

module.exports = Quiz;
