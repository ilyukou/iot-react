import React, { Component } from 'react';
import axios from 'axios';

import {getAllProjectApiUrl} from '../../Properties';

import ProjectListParcer from './ProjectListParcer';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projectIds : []
        }

        this.getProjectIds = this.getProjectIds.bind(this);
    }

    async getProjectIds(){
        await axios.get(getAllProjectApiUrl)
        .then(res => {
            this.setState({projectIds : res.data});

        }).catch(error => {
            console.log(error);
        });
    }
    
    componentDidMount(){
        this.getProjectIds();
    }

    render() { 
        if(this.state.projectIds.length == 0 ){
            return ( 
                <div>
                    <h3>Project List</h3>
                </div> 
            );
        } else {
            return ( 
                <div>
                    <h3>Project List</h3>
                    <ProjectListParcer value={this.state.projectIds}/>
                </div> 
            );
        }
    }
}
 
export default ProjectList;