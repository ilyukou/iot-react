import React, { Component } from 'react';

import Project from './Project';
import {Col, Row} from 'antd';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects : this.props.value,
            countColInRow : 3
        }

        this.getGridOfProject = this.getGridOfProject.bind(this); 
        this.getRow = this.getRow.bind(this);
        this.cutProjectsForOneRow = this.cutProjectsForOneRow.bind(this);
    }

    getGridOfProject(projects, countColInRow){

        if(projects.length == 0){
            return ( <div>Projects not found</div> );
        }

        console.log(projects.length);

        let rows = [];

        for(let i=0; i<projects.length; i+=countColInRow){
            let row;
            
            if(i+countColInRow > projects.length){
                // не полная строка
                row = this.getRow(this.cutProjectsForOneRow(projects, i, projects.length),
                        countColInRow);

            } else if(i+countColInRow == projects.length){
                row = this.getRow(this.cutProjectsForOneRow(projects, i, i + countColInRow),
                        countColInRow);

            } else if(i+countColInRow < projects.length){
                // хватает на еще одну строку с остатком
                row = this.getRow(this.cutProjectsForOneRow(projects, i, i + countColInRow),
                        countColInRow);
            }

            rows.push(row);
        }

        return rows;
    }

    cutProjectsForOneRow(projects, from, to){
        let arr = [];

        for(let i=from; i<to; i++){
            arr.push(projects[i]);
        }

        return arr;
    }

    getRow(projects, countColInRow){

        let projectsCols = projects.map(project => 
            <Col span={24/countColInRow}>
                <Project value={project}/>
            </Col>
        );

        return (
            <Row gutter={[8, 8]}>
                {projectsCols}
            </Row>
        );
    }

    render() { 
        return(
            <div>
                {this.getGridOfProject(this.state.projects, this.state.countColInRow)}
            </div>
        );
    }
}
 


export default Projects;