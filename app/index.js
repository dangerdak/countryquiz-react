const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
