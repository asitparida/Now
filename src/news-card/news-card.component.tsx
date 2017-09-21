import * as React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './news-card.component.scss';
import * as Models from '../services/models';

interface OwnProps {
    card:  Models.Card<Models.News>;
}

interface OwnState { }

const CardTextStyles: any = {
    backgroundColor: '#fff',
    fontSize: 'small',
    color: '#565656'
};

const NewsCardStyles: any = {
    boxShadow: 'rgba(231, 76, 60, 0.12) 0px 1px 6px, rgba(231, 76, 60, 0.12) 0px 1px 4px'
};

class NewsCard extends React.Component<OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { card } = this.props;
        CardTextStyles.backgroundColor = card.bgAccent;
        return (
            <a href={card.data.url} target="_blank" className="news-url">
                <Card className="news-card" style={NewsCardStyles}>
                    <CardHeader
                        title={card.data.provider}
                        subtitle={card.data.category}
                        avatar={card.data.thumbnail}
                    />
                    <div className="news-title">
                        <CardTitle
                            title={card.data.name}
                            style={{
                                fontSize: 'large',
                                paddingBottom: 0
                            }}
                        />
                    </div>
                    <div className="news-description">
                        <CardText style={CardTextStyles} >
                            {card.data.description}
                        </CardText>
                    </div>
                    {
                        !card.hideCardActions &&
                        <CardActions>
                            <FlatButton label="Action1" />
                            <FlatButton label="Action2" />
                        </CardActions>
                    }
                </Card>
            </a>
        );
    }
}
export default NewsCard;