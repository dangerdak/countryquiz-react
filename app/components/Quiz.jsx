const React = require('react');
const QuestionHeader = require('./QuestionHeader.jsx');
const SelectAnswer = require('./SelectAnswer.jsx');

function Quiz() {
  const country = {
    region: 'Asia',
    capital: 'Kabul',
    name: 'Afghanistan',
    largestCities: [
      'Kabul',
      'Kandahar',
    ],
    options: [
      'Kabul',
      'Kandahar',
      'Marieham',
      'Tirana',
      'London',
    ],
  };
  return (
    <section>
      <QuestionHeader
        countryName={country.name}
        question={{ number: 1, total: 5 }}
      />
      <SelectAnswer
        options={country.options}
      />
    </section>
  );
}

module.exports = Quiz;
