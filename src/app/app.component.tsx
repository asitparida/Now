import * as React from 'react';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import AppDrawer from '../drawer/drawer.component';
import { Drawer } from '../drawer/drawer-ipc.service';
import './app.component.scss';
import CardsDrawer from '../cards-drawer/cards-drawer.component';
import MailsDrawer from '../mails-drawer/mails-drawer.component';
import { Store } from '../state/store';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as redux from 'redux';
import { fetchNews } from '../state/action';

interface OwnProps { }

interface ConnectedState {
  news: { items: any[] };

}

interface ConnectedDispatch {
  fetchNews: () => void;
}

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ConnectedDispatch => ({
  fetchNews: () => {
    dispatch(fetchNews());
  }
});

interface OwnState { }

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({
  news: state.news
});

class AppComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  self = this;
  constructor() {
    super();
  }
  handleToggle() {
    Drawer.toggleDrawer();
  }
  render() {
    const { news } = this.props;
    const cardHolderTitle = 'Manchester United F.C.';
    const cardHolderType = 'sync';
    return (
      <div className="App">
        <AppDrawer />
        <div className="App-header">
          <div className="nav-manu-btn" >
            <IconButton onClick={this.handleToggle} >
              <NavigationMenu color={'#fff'} />
            </IconButton>
          </div>
          <h2>Now !</h2>
          <RaisedButton label="Fetch" onClick={this.props.fetchNews} />
        </div>
        <MailsDrawer />
        {
          news.items.length > 0
          &&
          <CardsDrawer title={cardHolderTitle} cards={news.items} type={cardHolderType} color="#c0392b" />
        }
      </div>
    );
  }
}
export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
