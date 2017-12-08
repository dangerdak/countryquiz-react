const React = require('react');
const PropTypes = require('prop-types');

class QuestionHeader extends React.Component {
  render() {
    return (
      <section>
        <h2>
          {this.props.question.number}&#47;{this.props.question.total}.
          What is the capital city of {this.props.countryName}?
        </h2>
      </section>
    );
  }
}

QuestionHeader.propTypes = {
  question: PropTypes.shape({
    number: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  countryName: PropTypes.string.isRequired,
};

module.exports = QuestionHeader;
