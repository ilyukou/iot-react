import React, { Component } from 'react';

import ProjectTitle from '../dashboard/ProjectTitle';
import ProjectForm from '../dashboard/ProjectForm';
import {Col, Row} from 'antd';

import {useLocation} from 'react-router-dom';

import Project from '../dashboard/project/Project';
import getCookie from '../../cookie/getCookie';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projects : [],
            countColInRow : 1
        }

        this.getGridOfProject = this.getGridOfProject.bind(this);
        this.getProjects = this.getProjects.bind(this);
    }

    async getProjects(){
        await axios({
            method: 'get', //you can set what request you want to be
            url: 'http://localhost:8080/project/all',
            data: {},
            headers: {
              "Authorization": getCookie("Authorization")
            }
          }).then(res => {
            console.log(res.data);
            this.setState({projects : res.data});
          }).catch(e => {
              console.log("Dashboard")
              console.log(e);
          })
    }

    componentDidMount(){
        this.getProjects();
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
                                <ProjectTitle id={project}/>
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