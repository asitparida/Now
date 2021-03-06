import * as React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import './slack-card.component.scss';

interface OwnProps {
    title: string;
    count: string;
    color: string;
    backgroundColor: string;
}

interface OwnState { }

const MailCardStyles: any = {
    boxShadow: '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)'
};

const CardTextStyles: any = {
    fontSize: 'large',
    fontWeight: 100,
    color: '#565656'
};

class SlackCard extends React.Component<OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { title, count, color } = this.props;
        return (
            <a href="" target="_blank" className="news-url">
                <Card className="mail-card" style={MailCardStyles}>
                    <div className="mail-title">
                        <CardTitle
                            title={count}
                            style={{
                                paddingBottom: 0,
                                color: color
                            }}
                        />
                    </div>
                    <div className="mail-description">
                        <CardText style={CardTextStyles} >
                            {title}
                        </CardText>
                    </div>
                </Card>
            </a>
        );
    }
}
export default SlackCard;