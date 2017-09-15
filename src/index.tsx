import * as React from 'react';
import * as Redux from 'redux';
import * as ReactDOM from 'react-dom';
import { App } from './app/app.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import { Provider } from 'react-redux';
import { Store } from './state/store';
import Reducers from './state/reducer';
import Epics from './state/epics';
import { createEpicMiddleware, } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(Epics);
let store: Redux.Store<Store.All> = Redux.createStore(
  Reducers,
  Redux.applyMiddleware(epicMiddleware)
);

class MaterialApp extends React.Component<{}, { isPinging: any, ping: any }> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(
  <MaterialApp />,
  document.getElementById('root') as HTMLElement
);
