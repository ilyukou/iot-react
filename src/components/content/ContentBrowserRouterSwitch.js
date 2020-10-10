import React, { Component } from 'react';

import Dashboard from './router/Dashboard';
import {Switch, BrowserRouter} from 'react-router-dom';

class ContentBrowserRouterSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = { projects : this.props.value }
    }
    
    render() {
        return ( 
            <Switch>

                <BrowserRouter path="/dashboard">
                    <Dashboard value={this.state.projects}/>
                </BrowserRouter>

            </Switch>
        );
    }
}
 
export default ContentBrowserRouterSwitch;