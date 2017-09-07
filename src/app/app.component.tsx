import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import AppDrawer from '../drawer/drawer.component';
import { Drawer } from '../drawer/drawer-ipc.service';
import { white } from 'material-ui/styles/colors';
import './app.component.scss';

const logo = require('../logo.svg');

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  handleToggle() {
    Drawer.toggleDrawer();
  }
  render() {
    return (
      <div className="App">
        <AppDrawer />
        <div className="App-header">
          <div className="nav-manu-btn" >
            <IconButton onClick={this.handleToggle} >
              <NavigationMenu color={white} />
            </IconButton>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Now !</h2>
        </div>
        <p className="App-intro">
          <h1>...</h1>
        </p>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        />
      </div>
    );
  }
}

export default App;
