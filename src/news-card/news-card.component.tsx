import * as React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './news-card.component.scss';

interface OwnProps {
    topic: string;
    category: string;
    name: string;
    url: string;
    thumbnail: string;
    description: string;
    provider: string;
    hideCardActions: Boolean;
}

interface OwnState { }

class NewsCard extends React.Component<OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { name, description, provider, thumbnail, url, hideCardActions, category } = this.props;
        return (
            <a href={url} target="_blank" className="news-url">
                <Card className="news-card">
                    <CardHeader
                        title={provider}
                        subtitle={category}
                        avatar={thumbnail}
                    />
                    <div className="news-title">
                        <CardTitle
                            title={name}
                            style={{
                                fontSize: 'large'
                            }}
                        />
                    </div>
                    <div className="news-description">
                        <CardText
                            style={{
                                backgroundColor: '#f6f6f6',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                fontSize: 'small'
                            }}
                        >
                            {description}
                        </CardText>
                    </div>
                    {
                        !hideCardActions &&
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