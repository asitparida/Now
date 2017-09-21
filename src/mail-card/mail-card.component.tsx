import * as React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import './mail-card.component.scss';

interface OwnProps {
    title: string;
    count: string;
}

interface OwnState { }

const MailCardStyles: any = {
    boxShadow: 'rgba(0, 115, 198, 0.12) 0px 1px 6px, rgba(0, 115, 198, 0.12) 0px 1px 4px'
};

const CardTextStyles: any = {
    backgroundColor: '#fff',
    fontSize: 'large',
    fontWeight: 100,
    color: '#565656'
};

class MailCard extends React.Component<OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { title, count} = this.props;
        return (
            <a href="" target="_blank" className="news-url">
                <Card className="mail-card" style={MailCardStyles}>
                    <div className="mail-title">
                        <CardTitle
                            title={count}
                            style={{
                                paddingBottom: 0
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
export default MailCard;