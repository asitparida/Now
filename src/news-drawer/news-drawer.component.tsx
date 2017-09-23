import * as React from 'react';
import NewsCard from '../news-card/news-card.component';
import * as Models from '../services/models';

const CardHolderTitleStyles = {
    float: 'left',
    fontSize: 'large',
    lineHeight: '60px',
    color: '#808080',
    textTransform: 'lowercase',
    letterSpacing: '1px'
};

const CardHolderTypeStyles = {
    float: 'right',
    fontSize: 'large',
    lineHeight: '60px',
    color: '#808080'
};

const CardTitleStyles = {
    padding: '0',
    height: '60px',
    width: '100%',
    boxSizing: 'border-box',
    borderBottom: '1px dashed rgba(0,0,0, 0.33)',
    marginBottom: '10px'
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
    cards: Models.Card<Models.News>[];
    title: string;
    type: string;
    color: string;
    backgroundColor: string;
    headerIcon: JSX.Element;
}

interface OwnState { }

class NewsDrawer extends React.Component<OwnProps, OwnState> {
    domRef: any;
    constructor(props: any) {
        super(props);
    }
    render() {
        const { cards, title, type, color, backgroundColor, headerIcon } = this.props;
        CardHolderTitleStyles.color = color;
        CardHolderTypeStyles.color = color;
        CardHolderStyles.backgroundColor = backgroundColor;
        const cardItems = cards.map((item, index: number) => {
            const cardItem: Models.Card<Models.News> = new Models.Card();
            cardItem.data = new Models.News(item);
            return (
              <div className="card-item-holder" key={index}>
                <NewsCard card={cardItem} color={color} />
              </div>
            );
          });
        return (
            <div className="cards-holder" style={CardHolderStyles} ref={(dom) => { this.domRef = dom; }}>
                <div className="card-title" style={CardTitleStyles}>
                    <span style={CardHolderTitleStyles}>{headerIcon} {title}</span>
                        <div className="card-action-refresh" style={{color: color}}>
                            <i className="material-icons">{type}</i>
                        </div>
                </div>
                <div className="cards-wrapper" style={CardWrapperStyles}>
                    {cardItems}
                </div>
            </div>
        );
    }
}
export default NewsDrawer;