import * as React from 'react';
// import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
// import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import AvAlbum from 'material-ui/svg-icons/av/album';
import IconButton from 'material-ui/IconButton';
import AppDrawer from '../drawer/drawer.component';
import { Drawer } from '../drawer/drawer-ipc.service';
import './app.component.scss';
import NewsDrawer from '../news-drawer/news-drawer.component';
import MailsDrawer from '../mails-drawer/mails-drawer.component';
import SlackDrawer from '../slack-drawer/slack-drawer.component';
import GithubDrawer from '../github-drawer/github-drawer.component';
import SearchDrawer from '../search-drawer/search-drawer.component';
import { Store } from '../state/store';
import { connect } from 'react-redux';
import * as redux from 'redux';
import { fetchNews } from '../state/action';
import * as Models from '../services/models';
import * as StubCollections from '../services/collections';

const nowIcon = require('./now_icon.svg');
const nowIconAppColor = '#e74c3c';

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
	headerForeground: string = '#000000';
	headerBackground: string = '#ffffff';
	headerId: string = '';
	headerTitle: string = 'ow';
	cardHolderRefs: any[] = [];
	constructor() {
		super();
	}
	setAccentsTo(targetHeaderId: string, color: string, bgColor: string, changeTitleBack: boolean = false) {
		if (this.headerTitle !== targetHeaderId) {
			const title = document.querySelector('[data-tag2="header-title"]');
			const headerIcon = document.querySelector('[data-tag="header-app-icon"]');
			targetHeaderId = targetHeaderId === 'search' ? 'ow' : targetHeaderId;
			if (title) {
				if (changeTitleBack) {
					(title as HTMLElement).innerHTML = 'ow';
				} else {
					(title as HTMLElement).innerHTML = targetHeaderId || 'ow';
				}
			}
			if ((title as HTMLElement).innerHTML === 'ow') {
				(title as HTMLElement).classList.add('no-space');
				(headerIcon as HTMLElement).style.backgroundColor = nowIconAppColor;
			} else {
				(title as HTMLElement).classList.remove('no-space');
				(headerIcon as HTMLElement).style.backgroundColor = color;
			}
		}
		if (targetHeaderId !== this.headerId) {
			this.headerId = targetHeaderId;
			const fgElements = document.querySelectorAll('[data-tag="header-fg"]');
			if (fgElements && fgElements.length > 0) {
				Array.from(fgElements).forEach((elem: HTMLElement) => {
					if (elem instanceof SVGElement) {
						elem.style.fill = color;
					} else {
						elem.style.color = color;
					}
				});
			}
		}
	}
	componentDidMount() {
		const self = this;
		document.addEventListener('scroll', (e) => {
			self.cardHolderRefs.forEach((com: any) => {
				if (com.domRef) {
					const props: ClientRect = com.domRef.getBoundingClientRect();
					const isValid = props.top >= (82 - props.height) && props.top <= 82;
					if (isValid) {
						self.setAccentsTo(com.props.title, com.props.color, com.props.backgroundColor, window.scrollY < 10);
					}
				}
			});
		});
	}
	handleToggle() {
		Drawer.toggleDrawer();
	}
	render() {
		this.cardHolderRefs = [];
		const cardHolders: Models.CardsHolder[] = [];
		let cardCollectionTemplate: JSX.Element[] = [];
		const { news } = this.props;
		cardHolders.push(StubCollections.OutlookCardsCollection);
		cardHolders.push(StubCollections.CompanySlackCardsCollection);
		cardHolders.push(StubCollections.GithubCardsCollection);
		cardHolders.push(StubCollections.SlackCardsCollection);
		cardHolders.push(StubCollections.GoogleMailCardsCollection);
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
		this.headerId = cardHolders[1].title;
		// tslint:disable:jsx-wrap-multiline jsx-alignment no-unused-expression
		cardCollectionTemplate = cardHolders.map((holder: Models.CardsHolder, index: number) => {
			if (holder.type === Models.CardHolderType.NEWS) {
				return <NewsDrawer ref={(dom) => { dom && this.cardHolderRefs.push(dom); }} key={index}
					title={holder.title} cards={holder.items} type="sync" color={holder.color} backgroundColor={holder.backgroundColor} headerIcon={holder.headerIcon} />;
			} else if (holder.type === Models.CardHolderType.SLACK) {
				return <SlackDrawer ref={(dom) => { dom && this.cardHolderRefs.push(dom); }} key={index}
					title={holder.title} cards={holder.items} color={holder.color} backgroundColor={holder.backgroundColor} headerIcon={holder.headerIcon} />;
			} else if (holder.type === Models.CardHolderType.GIT) {
				return <GithubDrawer ref={(dom) => { dom && this.cardHolderRefs.push(dom); }} key={index}
					title={holder.title} cards={holder.items} color={holder.color} backgroundColor={holder.backgroundColor} headerIcon={holder.headerIcon} />;
			} else {
				return <MailsDrawer ref={(dom) => { dom && this.cardHolderRefs.push(dom); }} key={index}
					title={holder.title} cards={holder.items} color={holder.color} backgroundColor={holder.backgroundColor} headerIcon={holder.headerIcon} />;
			}
		}
		);
		return (
			<div className="App">
				<AppDrawer />
				<div className="App-header" style={{ backgroundColor: this.headerBackground }} data-tag="header-bg">
					<div className="content">
						<div className="app-header-icon" style={{ WebkitMaskImage: 'url(' + nowIcon + ')', backgroundColor: nowIconAppColor }} data-tag="header-app-icon" />
						<h2 className="no-space" style={{ color: this.headerForeground, textTransform: 'lowercase' }} data-tag2="header-title" data-tag="header-fg">{this.headerTitle}</h2>
						<div className="nav-menu-btn pull-right" >
							<IconButton onClick={this.props.fetchNews} >
								<AvAlbum color={this.headerForeground} />
							</IconButton>
							<IconButton onClick={this.handleToggle}>
								<ActionSettings color={this.headerForeground} />
							</IconButton>
						</div>
					</div>
				</div>
				<div className="App-content">
					<SearchDrawer ref={(dom) => { dom && this.cardHolderRefs.push(dom); }} title="search" color="#000000" backgroundColor="#ffffff" />
					{
						cardHolders.length > 0 &&
						cardCollectionTemplate
					}
				</div>
			</div>
		);
		// tslint:enable:jsx-wrap-multiline jsx-alignment no-unused-expression
	}
}
export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
