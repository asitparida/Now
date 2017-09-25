import * as React from 'react';
import AvMic from 'material-ui/svg-icons/av/mic';
import IconButton from 'material-ui/IconButton';

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

interface OwnState { 
    searchToken: string;
}

class SearchDrawer extends React.Component<OwnProps, OwnState> {
    domRef: any;
    escape: boolean = true;
    searchToken = '';
    constructor(props: any) {
        super(props);
        this.state = {
            searchToken: ''
        };
        this.updateToken = this.updateToken.bind(this);
        this.launchSearch = this.launchSearch.bind(this);
    }
    launchSearch($event: any) {
        if ($event.keyCode === 13 && this.state.searchToken !== '') {
            window.location.assign('https://www.google.co.in/search?q=' + this.state.searchToken);
        }
    }
    updateToken(e: any) {
        this.setState({
            searchToken: (e.target.value as string).trim()
        });
    }
    // tslint:disable:max-line-length
    render() {
        return (
            <div className="cards-holder" style={CardHolderStyles} ref={(dom) => { this.domRef = dom; }}>
                <div className="cards-wrapper" style={CardWrapperStyles}>
                    <div className="cards-img-inner">
                        <video src="https://player.vimeo.com/external/226624946.hd.mp4?s=6857972b29b70e164494b409185fc6b5b63ba7ad&profile_id=175" autoPlay={true} loop={true} />
                        <div className="search-container">
                            <div className="input-holder">
                                <input type="text" value={this.state.searchToken} placeholder="Search" onChange={this.updateToken} onKeyUp={this.launchSearch} />
                                <IconButton className="search-mic">
                                    <AvMic color="rgba(255, 255, 255, 0.560)" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    // tslint:enable:max-line-length
}
export default SearchDrawer;