import * as React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import * as Models from '../services/models';
import './github-card.component.scss';

interface OwnProps {
    title: string;
    count: string;
    color: string;
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

class GithubCard extends React.Component<OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { title, count, color } = this.props;
        let rgb = Models.hexToRgb(color);
        if (!rgb) {
            rgb = { r: 0, g: 0, b: 0};
        }
        const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)`;
        MailCardStyles.boxShadow = rgba + ' 0px 1px 6px, ' + rgba + ' 0px 1px 4px';
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
export default GithubCard;