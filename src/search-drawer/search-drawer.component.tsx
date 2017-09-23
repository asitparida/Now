import * as React from 'react';

const CardWrapperStyles = {
    padding: '0'
};

const CardHolderStyles = {
    padding: '0 20px 10px 20px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: ''
};

interface OwnProps {
    title: string;
    color: string;
    backgroundColor: string;
}

interface OwnState { }

class SearchDrawer extends React.Component<OwnProps, OwnState> {
    domRef: any;
    escape: boolean = true;
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="cards-holder" style={CardHolderStyles} ref={(dom) => { this.domRef = dom; }}>
                <div className="cards-wrapper" style={CardWrapperStyles}>
                    <div className="cards-img-inner" style={{backgroundImage: 'url(' + 'https://pixabay.com/get/eb32b2062ff7013ed95c4518b74a4394e573ead704b0144193f1c87ea0ebb2_640.jpg' + ')'}} />
                </div>
            </div>
        );
    }
}
export default SearchDrawer;