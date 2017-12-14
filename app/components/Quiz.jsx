const React = require('react');
const PropTypes = require('prop-types');

const Results = require('./Results.jsx');
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

function SelectAnswer({ options, userAnswer, onSelect }) {
  return (
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
}

SelectAnswer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  userAnswer: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function QuestionNavigation({ questionNumber, onNext, onPrevious, onSubmit }) {
  return (
    <nav>
      { questionNumber.current !== 0 ? <button onClick={onPrevious}>Previous</button> : null }
      { questionNumber.current !== questionNumber.total - 1 ? <button onClick={onNext}>Next</button> : null }
      { questionNumber.current === questionNumber.total - 1 ? <button onClick={onSubmit}>Submit</button> : null }
    </nav>
  );
}

QuestionNavigation.propTypes = {
  questionNumber: PropTypes.shape({
    number: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function Question({ question, userAnswer, questionNumber, onSelect }) {
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
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionNumber: PropTypes.shape({
    number: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  userAnswer: PropTypes.string.isRequired,
};

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
