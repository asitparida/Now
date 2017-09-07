import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './App.scss';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Now</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <RaisedButton label="Default" />
      </div>
    );
  }
}

export default App;
