import * as React from 'react';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import AppDrawer from '../drawer/drawer.component';
import { Drawer } from '../drawer/drawer-ipc.service';
import './app.component.scss';
import NewsDrawer from '../news-drawer/news-drawer.component';
import MailsDrawer from '../mails-drawer/mails-drawer.component';
import SlackDrawer from '../slack-drawer/slack-drawer.component';
import { Store } from '../state/store';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as redux from 'redux';
import { fetchNews } from '../state/action';
import * as Models from '../services/models';
import { OutlookMailItems, GoogleMailItems, SlackItems } from '../services/stubs';
const outlook = require('../../node_modules/simple-icons/icons/microsoftoutlook.svg');
const gmail = require('../../node_modules/simple-icons/icons/gmail.svg');
const slack = require('../../node_modules/simple-icons/icons/slack.svg');

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
    const cardHolders: Models.CardsHolder[] = [];
    let cardCollectionTemplate: JSX.Element[] = [];
    const { news } = this.props;
    if (SlackItems.length > 0) {
      let cardCollection = new Models.CardsHolder();
      cardCollection.color = '#56B68B';
      cardCollection.backgroundColor = '#eef7f3';
      cardCollection.items = SlackItems;
      cardCollection.title = 'lean-case.slack.com';
      cardCollection.type = Models.CardHolderType.SLACK;
      let outlookUrl = 'url(' + slack + ')';
      cardCollection.headerIcon = <div className="card-title-img" style={{ WebkitMaskImage: outlookUrl, backgroundColor: cardCollection.color }} />;
      cardHolders.push(cardCollection);
    }
    if (OutlookMailItems.length > 0) {

      let cardCollection = new Models.CardsHolder();
      cardCollection.color = '#0072C6';
      cardCollection.backgroundColor = '#e1f0fa';
      cardCollection.items = OutlookMailItems;
      cardCollection.title = 'Outlook';
      cardCollection.type = Models.CardHolderType.MAILBOX;
      let outlookUrl = 'url(' + outlook + ')';
      cardCollection.headerIcon = <div className="card-title-img" style={{ WebkitMaskImage: outlookUrl, backgroundColor: cardCollection.color }} />;
      cardHolders.push(cardCollection);

      cardCollection = new Models.CardsHolder();
      cardCollection.color = '#D14836';
      cardCollection.backgroundColor = '#f8e6e3';
      cardCollection.items = GoogleMailItems;
      cardCollection.title = 'Google Mail';
      cardCollection.type = Models.CardHolderType.MAILBOX;
      outlookUrl = 'url(' + gmail + ')';
      cardCollection.headerIcon = <div className="card-title-img" style={{ WebkitMaskImage: outlookUrl, backgroundColor: cardCollection.color }} />;
      cardHolders.push(cardCollection);
    }
    if (news.items.length > 0) {
      const cardCollection = new Models.CardsHolder();
      cardCollection.color = '#c0392b';
      cardCollection.backgroundColor = '#fdf3f2';
      cardCollection.items = news.items;
      cardCollection.title = 'Manchester United F.C.';
      cardCollection.type = Models.CardHolderType.NEWS;
      cardCollection.headerIcon = <i className="material-icons marginRight10" style={{ color: '#c0392b' }}>fitness_center</i>;
      cardHolders.push(cardCollection);
    }
    cardCollectionTemplate = cardHolders.map((holder: Models.CardsHolder, index: number) => {
      if (holder.type === Models.CardHolderType.NEWS) {
        return <NewsDrawer key={index} title={holder.title} cards={holder.items} type="sync" color={holder.color} backgroundColor={holder.backgroundColor} headerIcon={holder.headerIcon} />;
      } else if (holder.type === Models.CardHolderType.SLACK) {
        return <SlackDrawer key={index} title={holder.title} cards={holder.items} color={holder.color} backgroundColor={holder.backgroundColor} headerIcon={holder.headerIcon} />;
      } else {
        return <MailsDrawer key={index} title={holder.title} cards={holder.items} color={holder.color} backgroundColor={holder.backgroundColor} headerIcon={holder.headerIcon} />;
      }
    }
    );
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
        {
          cardHolders.length > 0 &&
          cardCollectionTemplate
        }
      </div>
    );
  }
}
export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
