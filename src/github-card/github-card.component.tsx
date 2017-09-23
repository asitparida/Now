import * as React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
// import * as Models from '../services/models';
import './github-card.component.scss';

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

class GithubCard extends React.Component<OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { title, count, color, backgroundColor } = this.props;
        // let rgb = Models.hexToRgb('#000');
        // if (!rgb) {
        //     rgb = { r: 0, g: 0, b: 0};
        // }
        // const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)`;
        // MailCardStyles.boxShadow = rgba + ' 0px 1px 6px, ' + rgba + ' 0px 1px 4px';
        MailCardStyles.backgroundColor = backgroundColor;
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