const React = require('react');
const PropTypes = require('prop-types');
const QuestionHeader = require('./QuestionHeader.jsx');
const SelectAnswer = require('./SelectAnswer.jsx');
const QuestionNavigation = require('./QuestionNavigation.jsx');
const questions = require('../country-data');

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
