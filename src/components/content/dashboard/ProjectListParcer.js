import React, { Component } from 'react';
import axios from 'axios';

import {projectApiUrl} from '../../Properties';

import Project from './Project';

class ProjectListParcer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            projectIds : this.props.value,
            projects : [],

            isLoading : true
        }

        this.getProjectInfo = this.getProjectInfo.bind(this);
    }

    async getProjectInfo(id){
        await axios.get(projectApiUrl + "/" + id)
        .then(res => {
            this.state.projects.push(res.data);
            this.setState({isLoading : false});
            
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount(){
        this.state.projectIds.forEach(id => this.getProjectInfo(id));
    }

    render() { 
        if(this.state.projectIds.length == 0){
            return ( <div>Projects not found</div> );
        }

        let projects = this.state.projects.map(project => <li><Project value={project}/></li>)

        return (
            <div>
                <ul>
                    {projects}
                </ul>
            </div>
        );
    }
}
 


export default ProjectListParcer;