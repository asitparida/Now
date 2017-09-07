import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Drawer as IPC } from './drawer-ipc.service';
import './drawer.component.scss';

export default class AppDrawer extends React.Component {

    state: any = {};
    constructor(props: any) {
        super(props);
        this.state = { open: false };
        IPC.drawerOpenObservable.subscribe((data) => {
            console.log(data);
            this.setState({
                open: data
            });
        });
    }

    handleClose = () => this.setState({ open: false });
    handleRequestChange = (data: any) => {
        this.setState({
            open: data
        });
        if (!data) {
            IPC.markDrawerAsClosed();
        }
    }

    render() {
        return (
            <Drawer 
                className="drawer"
                docked={false}
                width={300}
                open={this.state.open}
                onRequestChange={this.handleRequestChange}
            >
                <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
            </Drawer>
        );
    }
}