import * as React from 'react';
import MailCard from '../mail-card/mail-card.component';

const outlook = require('../../node_modules/simple-icons/icons/microsoftoutlook.svg');
const outlookColor = '#0072C6';
const CardHolderTitleStyles = {
    float: 'left',
    fontSize: 'large',
    lineHeight: '60px',
    color: outlookColor
};

const CardHolderTypeStyles = {
    float: 'right',
    fontSize: 'large',
    lineHeight: '60px',
    color: outlookColor
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
    margin: '0 -5px'
};

const CardHolderStyles = {
    padding: '0 20px 10px 20px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#e1f0fa'
};

interface OwnProps {
}

interface OwnState { }

class MailsDrawer extends React.Component<OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const type = 'sync';
        const outlookUrl = 'url(' + outlook + ')';
        return (
            <div className="cards-holder" style={CardHolderStyles}>
                <div className="card-title" style={CardTitleStyles}>
                    <span style={CardHolderTitleStyles}>
                        <div className="card-title-img" style={{ WebkitMaskImage : outlookUrl, backgroundColor: outlookColor}} /> Outlook Mail
                    </span>
                    <span style={CardHolderTypeStyles}> <i className="material-icons">{type}</i></span>
                </div>
                <div className="cards-wrapper" style={CardWrapperStyles}>
                    <div className="card-item-holder half">
                        <MailCard title="Inbox" count="02" />
                    </div>
                    <div className="card-item-holder half">
                        <MailCard title="EggHead" count="02" />
                    </div>
                    <div className="card-item-holder half">
                        <MailCard title="asitkparida@live.in" count="02" />
                    </div>
                </div>
            </div>
        );
    }
}
export default MailsDrawer;