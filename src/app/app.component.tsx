import * as React from 'react';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import AppDrawer from '../drawer/drawer.component';
import { Drawer } from '../drawer/drawer-ipc.service';
import { white } from 'material-ui/styles/colors';
import './app.component.scss';
import CardWithAvatar from '../card/card.component';
// import Paper from 'material-ui/Paper';

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
        <div className="card-holder">
          <CardWithAvatar hideCardTitle={true} hideCardActions={true}  />
        </div>
        <div className="card-holder">
          <CardWithAvatar hideCardTitle={true} hideCardActions={true}  />
        </div>
        <div className="card-holder">
          <CardWithAvatar hideCardTitle={true} hideCardActions={true}  />
        </div>
        <div className="card-holder">
          <CardWithAvatar hideCardTitle={true} hideCardActions={true}  />
        </div>
        <div className="card-holder">
          <CardWithAvatar hideCardTitle={true} hideCardActions={true}  />
        </div>
        <div className="card-holder">
          <CardWithAvatar hideCardTitle={true} hideCardActions={true}  />
        </div>
      </div>
    );
  }
}

export default App;
