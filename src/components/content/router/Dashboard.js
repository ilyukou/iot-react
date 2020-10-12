import React, { Component } from 'react';

import ProjectTitle from '../dashboard/ProjectTitle';
import ProjectForm from '../dashboard/ProjectForm';
import {Col, Row} from 'antd';

import {useLocation} from 'react-router-dom';

import Project from '../dashboard/project/Project';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects : this.props.value,
            countColInRow : 1
        }

        this.getGridOfProject = this.getGridOfProject.bind(this); 
    }

    getGridOfProject(projects, sizeRow){

        if(projects.length == 0){
            return ( <div>Projects not found</div> );
        }

        let rows = [];

        for (let i = 0; i <Math.ceil(projects.length/sizeRow); i++){
            rows[i] = projects.slice((i*sizeRow), (i*sizeRow) + sizeRow);
        }

        console.log(rows);

        return (
            <div>
                {rows.map(row => 
                    <Row gutter={[16, 16]}>
                        {row.map(project => 
                            <Col span={24/sizeRow}>
                                <ProjectTitle value={project}/>
                            </Col>)
                        }
                    </Row>)
                }
            </div>
        );
    }

    render() {
        const Draw = props => {
            let query = new URLSearchParams(useLocation().search);
            let projectId = query.get("projectId");

            if(projectId !== null){
                return (
                    <Project value={projectId}/>
                );
            }

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
                        {this.getGridOfProject(this.state.projects, this.state.countColInRow)}
                    </div> 
                );
            }
        
        }

        return (<Draw/>);
    } 
    
}
 
export default Dashboard;