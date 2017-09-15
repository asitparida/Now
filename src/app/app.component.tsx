import * as React from 'react';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import AppDrawer from '../drawer/drawer.component';
import { Drawer } from '../drawer/drawer-ipc.service';
import { black } from 'material-ui/styles/colors';
import './app.component.scss';
import NewsCard from '../news-card/news-card.component';
import { Store } from '../state/store';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import * as redux from 'redux';
import { changeImage } from '../state/action';
import * as Models from '../services/models';

interface OwnProps { }

interface ConnectedState {
  imager: { imgSrc: string };
  news: { items: any[] };

}

interface ConnectedDispatch {
  changeImage: () => void;
}

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ConnectedDispatch => ({
  changeImage: () => {
    dispatch(changeImage());
  }
});

interface OwnState { }

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({
  imager: state.imager,
  news: state.news
});

class AppComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  self = this;
  handleToggle() {
    Drawer.toggleDrawer();
  }
  render() {
    const { news } = this.props;
    const cardItems = news.items.map((item, index: number) => {
      const cardItem: Models.Card<Models.News> = new Models.Card();
      cardItem.data = new Models.News(item);
      cardItem.topic = 'man utd';
      return (
        <div className="card-holder" key={index}>
          <NewsCard card={cardItem} />
        </div>
      );
    });
    return (
      <div className="App">
        <AppDrawer />
        <div className="App-header">
          <div className="nav-manu-btn" >
            <IconButton onClick={this.handleToggle} >
              <NavigationMenu color={black} />
            </IconButton>
          </div>
          <h2>Now !</h2>
          <RaisedButton label="Fetch" onClick={this.props.changeImage} />
        </div>
        {cardItems}
      </div>
    );
  }
}
export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
