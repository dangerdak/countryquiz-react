import React from 'react';

import QuestionNavigation from './QuestionNavigation';
import Question from './question/Question';
import Results from './results/Results';

const questions = require('../country-data');

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      userAnswers: [],
      stage: 'questions',
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
  }

  handleNext(event) {
    event.preventDefault();
    this.setState(prevState =>
      ({
        currentQuestion: prevState.currentQuestion + 1,
      }));
  }

  handlePrevious(event) {
    event.preventDefault();
    this.setState(prevState =>
      ({
        currentQuestion: prevState.currentQuestion - 1,
      }));
  }

  handleSelection(event) {
    const newAnswer = event.target.value;
    this.setState((prevState) => {
      const newAnswers = [...prevState.userAnswers];
      newAnswers[prevState.currentQuestion] = newAnswer;
      return ({
        userAnswers: newAnswers,
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      stage: 'results',
    });
  }

  handleRetry(event) {
    event.preventDefault();
    this.setState({
      stage: 'questions',
      currentQuestion: 0,
      userAnswers: [],
    });
  }

  render() {
    const { currentQuestion, userAnswers, stage } = this.state;
    const answers = questions.map((question, index) => (
      { country: question.name, correct: question.capital, user: userAnswers[index] }
    ));

    return (
      <main>
        <h1>Capital Cities Quiz</h1>
        { stage === 'questions' ?
          <form>
            <Question
              question={questions[currentQuestion]}
              questionNumber={{ current: currentQuestion, total: questions.length }}
              onSelect={this.handleSelection}
              userAnswer={userAnswers[currentQuestion] || ''}
            />
            <QuestionNavigation
              questionNumber={{ current: currentQuestion, total: questions.length }}
              onNext={this.handleNext}
              onPrevious={this.handlePrevious}
              onSubmit={this.handleSubmit}
            />
          </form>
          :
          <Results
            answers={answers}
            onRetry={this.handleRetry}
          />
        }
      </main>
    );
  }
}

module.exports = Quiz;
