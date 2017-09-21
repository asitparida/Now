import * as React from 'react';
import NewsCard from '../news-card/news-card.component';
import * as Models from '../services/models';

const CardHolderTitleStyles = {
    float: 'left',
    fontSize: 'large',
    lineHeight: '60px',
    color: '#808080'
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
    margin: '0 -5px'
};

const CardHolderStyles = {
    padding: '0 20px 10px 20px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fdf3f2'
};

interface OwnProps {
    cards: Models.Card<Models.News>[];
    title: string;
    type: string;
    color: string;
}

interface OwnState { }

class CardsDrawer extends React.Component<OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { cards, title, type, color } = this.props;
        CardHolderTitleStyles.color = color;
        CardHolderTypeStyles.color = color;
        const cardItems = cards.map((item, index: number) => {
            const cardItem: Models.Card<Models.News> = new Models.Card();
            cardItem.data = new Models.News(item);
            cardItem.topic = 'man utd';
            cardItem.bgAccent = '#fff';
            return (
              <div className="card-item-holder" key={index}>
                <NewsCard card={cardItem} />
              </div>
            );
          });
        return (
            <div className="cards-holder" style={CardHolderStyles}>
                <div className="card-title" style={CardTitleStyles}>
                    <span style={CardHolderTitleStyles}>
                        <i className="material-icons" style={{ color: color}}>fitness_center</i>{title}</span>
                    <span style={CardHolderTypeStyles}> <i className="material-icons">{type}</i></span>
                </div>
                <div className="cards-wrapper" style={CardWrapperStyles}>
                    {cardItems}
                </div>
            </div>
        );
    }
}
export default CardsDrawer;