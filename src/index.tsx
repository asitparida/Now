import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

class MaterialApp extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <MaterialApp />,
  document.getElementById('root') as HTMLElement
);
