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

function QuestionNavigation({ questionNumber, onNext, onPrevious }) {
  return (
    <nav>
      { questionNumber.current !== 0 ? <button onClick={onPrevious}>Previous</button> : null }
      { questionNumber.current !== questionNumber.total - 1 ? <button onClick={onNext}>Next</button> : null }
      { questionNumber.current === questionNumber.total - 1 ? <button>Submit</button> : null }
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
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
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

  render() {
    const { currentQuestion, userAnswers } = this.state;

    return (
      <main>
        <h1>Capital Cities Quiz</h1>
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
          />
        </form>
      </main>
    );
  }
}

module.exports = Quiz;
