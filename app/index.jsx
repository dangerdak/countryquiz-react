const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const Quiz = require('./components/Quiz');

ReactDOM.render(
  <Quiz />,
  document.getElementById('app'),
);
