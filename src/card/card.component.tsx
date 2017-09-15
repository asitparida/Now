import * as React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const bg = require('../card_bg.jpg');

interface OwnProps {
    hideCardTitle: Boolean;
    hideCardActions: Boolean;
    imgsrc: string;
}

interface OwnState { }

class AvatarCard extends React.Component< OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { hideCardActions, hideCardTitle, imgsrc } = this.props;
        return (
            <Card>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar={bg}
                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src={imgsrc} alt="" />
                </CardMedia>
                {
                    !hideCardTitle &&
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                }
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                {
                    !hideCardActions &&
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                }
            </Card>
        );
    }
}
export default AvatarCard;