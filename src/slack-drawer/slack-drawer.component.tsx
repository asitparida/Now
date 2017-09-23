import * as React from 'react';
import SlackCard from '../slack-card/slack-card.component';
import * as Models from '../services/models';

const outlookColor = '#0072C6';
const CardHolderTitleStyles = {
    float: 'left',
    fontSize: 'large',
    lineHeight: '60px',
    color: outlookColor,
    textTransform: 'lowercase',
    letterSpacing: '1px'
};

const CardTitleStyles = {
    padding: '0',
    height: '60px',
    width: '100%',
    boxSizing: 'border-box',
    borderBottom: '1px dashed rgba(0,0,0, 0.33)',
    marginBottom: '10px',
    color: outlookColor
};

const CardWrapperStyles = {
    padding: '0',
    margin: '0 -10px'
};

const CardHolderStyles = {
    padding: '0 20px 10px 20px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: ''
};

interface OwnProps {
    cards: Models.Card<Models.MailBoxItem>[];
    title: string;
    color: string;
    backgroundColor: string;
    headerIcon: JSX.Element;
}

interface OwnState { }

class SlackDrawer extends React.Component<OwnProps, OwnState> {
    domRef: any;
    constructor(props: any) {
        super(props);
    }
    render() {
        const { cards, color, title, backgroundColor, headerIcon } = this.props;
        CardHolderStyles.backgroundColor = backgroundColor;
        CardHolderTitleStyles.color = color;
        const cardItems = cards.map((item, index: number) => {
            const cardItem: Models.Card<Models.MailBoxItem> = new Models.Card();
            cardItem.data = new Models.MailBoxItem(item);
            cardItem.topic = title;
            return (
                <div className="card-item-holder half" key={index}>
                    <SlackCard title={cardItem.data.title} count={cardItem.data.count} color={color} />
                </div>
            );
        });
        return (
            <div className="cards-holder" style={CardHolderStyles} ref={(dom) => { this.domRef = dom; }}>
                <div className="card-title" style={CardTitleStyles}>
                    <span style={CardHolderTitleStyles} >
                        {headerIcon} {title}
                    </span>
                    <div className="card-action-refresh" style={{ color: color }}>
                        <i className="material-icons">sync</i>
                    </div>
                </div>
                <div className="cards-wrapper" style={CardWrapperStyles}>
                    {
                        cards.length > 0 &&
                        cardItems
                    }
                </div>
            </div>
        );
    }
}
export default SlackDrawer;