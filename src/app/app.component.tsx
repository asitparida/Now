import * as React from 'react';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
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
import { Store } from '../state/store';
import { connect } from 'react-redux';
import * as redux from 'redux';
import { fetchNews } from '../state/action';
import * as Models from '../services/models';
import { OutlookMailItems, GoogleMailItems, SlackItems, GithubStats } from '../services/stubs';
const outlook = require('../../node_modules/simple-icons/icons/microsoftoutlook.svg');
const gmail = require('../../node_modules/simple-icons/icons/gmail.svg');
const slack = require('../../node_modules/simple-icons/icons/slack.svg');
const github = require('../../node_modules/simple-icons/icons/github.svg');

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
	headerForeground: string = '#0073c6';
	headerBackground: string = '#ffffff';
	headerId: string = '';
	headerTitle: string = '( now )';
	cardHolderRefs: any[] = [];
	constructor() {
		super();
	}
	setAccentsTo(targetHeaderId: string, color: string, bgColor: string, changeTitleBack: boolean = false) {
		if (this.headerTitle !== targetHeaderId) {
			const title = document.querySelector('[data-tag2="header-title"]');
			if (title) {
				if (changeTitleBack) {
					(title as HTMLElement).innerHTML = '( now )';
				} else {
					(title as HTMLElement).innerHTML = targetHeaderId;
				}
			}
		}
		if (targetHeaderId !== this.headerId) {
			this.headerId = targetHeaderId;
			const fgElements = document.querySelectorAll('[data-tag="header-fg"]');
			if (fgElements && fgElements.length > 0 ) {
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
		if (GithubStats.length > 0) {
			let cardCollection = new Models.CardsHolder();
			cardCollection.color = '#181717';
			cardCollection.backgroundColor = '#fcf3d0';
			cardCollection.items = GithubStats;
			cardCollection.title = 'github';
			cardCollection.type = Models.CardHolderType.GIT;
			let outlookUrl = 'url(' + github + ')';
			cardCollection.headerIcon = <div className="card-title-img" style={{ WebkitMaskImage: outlookUrl, backgroundColor: cardCollection.color }} />;
			cardHolders.push(cardCollection);
		}
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
		this.headerForeground = cardHolders[0].color;
		this.headerId = cardHolders[0].title;
		cardCollectionTemplate = cardHolders.map((holder: Models.CardsHolder, index: number) => {
			// tslint:disable:jsx-wrap-multiline jsx-alignment no-unused-expression
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
			// tslint:enable:jsx-wrap-multiline jsx-alignment no-unused-expression
		}
		);
		return (
			<div className="App">
				<AppDrawer />
				<div className="App-header" style={{backgroundColor: this.headerBackground}} data-tag="header-bg">
					<div className="nav-menu-btn pull-left" >
						<IconButton onClick={this.handleToggle} >
							<NavigationMenu color={this.headerForeground} data-tag="header-fg" />
						</IconButton>
					</div>
					<h2 style={{color: this.headerForeground, textTransform: 'lowercase'}} data-tag2="header-title" data-tag="header-fg">{this.headerTitle}</h2>
					<div className="nav-menu-btn pull-right" >
						<IconButton onClick={this.props.fetchNews} >
							<AvAlbum color={this.headerForeground} data-tag="header-fg" />
						</IconButton>
						<IconButton >
							<ActionSettings color={this.headerForeground} data-tag="header-fg" />
						</IconButton>
					</div>
				</div>
				<div className="App-content">
					{
						cardHolders.length > 0 &&
						cardCollectionTemplate
					}
				</div>
			</div>
		);
	}
}
export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
