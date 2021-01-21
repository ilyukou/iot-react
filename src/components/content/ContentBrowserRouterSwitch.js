import React, { Component } from 'react';

import Dashboard from './router/Dashboard';
import EntryPoint from './router/EntryPoint';
import {Switch, BrowserRouter} from 'react-router-dom';

class ContentBrowserRouterSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return ( 
            <Switch>

                <BrowserRouter path="/dashboard">
                    <Dashboard value={[]}/>
                </BrowserRouter>
                <BrowserRouter path="/login">
                    <EntryPoint/>
                </BrowserRouter>

            </Switch>
        );
    }
}
 
export default ContentBrowserRouterSwitch;