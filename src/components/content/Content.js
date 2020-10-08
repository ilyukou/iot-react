import React, { Component } from 'react';

import {Switch, Route} from "react-router-dom";

import Dashboard from './router/Dashboard';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Switch>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        );
    }
}
 
export default Content;