const React = require('react');
const QuestionHeader = require('./QuestionHeader.jsx');
const SelectAnswer = require('./SelectAnswer.jsx');
const QuestionNavigation = require('./QuestionNavigation.jsx');
const questions = require('../country-data');

function Quiz() {
  const questionNumber = 4;
  return (
    <form>
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
      <QuestionNavigation
        question={{ number: questionNumber, total: questions.length }}
      />
    </form>
  );
}

module.exports = Quiz;
