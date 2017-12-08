const React = require('react');
const QuestionHeader = require('./QuestionHeader.jsx');

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
    <QuestionHeader
      countryName={country.name}
      question={{ number: 1, total: 5 }}
    />
  );
}

module.exports = Quiz;
