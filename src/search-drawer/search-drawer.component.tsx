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

interface OwnState { }

class SearchDrawer extends React.Component<OwnProps, OwnState> {
    domRef: any;
    escape: boolean = true;
    constructor(props: any) {
        super(props);
    }
    // tslint:disable:max-line-length
    render() {
        return (
            <div className="cards-holder" style={CardHolderStyles} ref={(dom) => { this.domRef = dom; }}>
                <div className="cards-wrapper" style={CardWrapperStyles}>
                    <div className="cards-img-inner">
                        <video src="https://gcs-vimeo.akamaized.net/exp=1506215329~acl=%2A%2F796537622.mp4%2A~hmac=affef391961018435b1ec15bf3e0f82ef1c08b10d584a7633c72ea54833c33b5/vimeo-prod-skyfire-std-us/01/324/9/226624946/796537622.mp4" autoPlay={true} loop={true} />
                        <div className="search-container">
                            <div className="input-holder">
                                <input type="text" placeholder="Search" />
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