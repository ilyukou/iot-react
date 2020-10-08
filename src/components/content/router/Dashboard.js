import React, { Component } from 'react';

import ProjectList from '../dashboard/ProjectList';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2>Dashboard</h2>
                <ProjectList/>
            </div> 
        );
    }
}
 
export default Dashboard;