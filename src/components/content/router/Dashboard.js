import React, { Component } from 'react';

import Projects from '../dashboard/Projects';
import ProjectForm from '../dashboard/ProjectForm';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects : this.props.value
        }
    }
    render() {
        if(this.state.projects.length == 0 ){
            return ( 
                <div>
                    <ProjectForm/>
                    Projects not found
                </div> 
            );
        } else {
            return ( 
                <div>
                    <ProjectForm/>
                    <Projects value={this.state.projects}/>
                </div> 
            );
        }
    }
}
 
export default Dashboard;