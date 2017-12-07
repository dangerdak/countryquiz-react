const React = require('react');
const ReactDOM = require('react-dom');

class QuestionHeader extends React.Component {
  render() {
    return (
      <section>
        <h2>
          {this.props.question.number}&#47;{this.props.question.total}.
          What is the capital city of {this.props.country.name}
        </h2>
      </section>
    );
  }
}

class Quiz extends React.Component {
  render() {
    const country = {
        "region": "Asia",
        "capital": "Kabul",
        "name": "Afghanistan",
        "largestCities": [
            "Kabul",
            "Kandahar"
        ],
      "options": [
        "Kabul",
        "Kandahar",
        "Marieham",
        "Tirana",
        "London"
      ]
    };
    return (
      <QuestionHeader
      country={{ name: country.name}}
      question={{ number: 1, total: 5}}
    />
    );
  }
}

module.exports = Quiz;
