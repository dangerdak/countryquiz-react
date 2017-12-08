const React = require('react');
const QuestionHeader = require('./QuestionHeader.jsx');
const SelectAnswer = require('./SelectAnswer.jsx');
const QuestionNavigation = require('./QuestionNavigation.jsx');
const questions = require('../country-data');

function Quiz() {
  const questionNumber = 2;
  return (
    <section>
      <QuestionHeader
        countryName={questions[questionNumber].name}
        question={{ number: questionNumber, total: questions.length }}
      />
      <SelectAnswer
        options={questions[questionNumber].options}
      />
      <QuestionNavigation questionNumber={questionNumber} />
    </section>
  );
}

module.exports = Quiz;
