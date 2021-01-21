import React, { Component } from 'react';
import axios from 'axios';
import ProjectEditForm from './ProjectEditForm';
import Sensor from './sensor/Sensor';
import ProjectNavigation from './ProjectNavigation';
import {Row, Col} from 'antd';
import SensorFrom from './SensorForm';
import getCookie from '../../../cookie/getCookie';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id : this.props.value,
            isLoading : true,

            project : {}
        }

        this.getProjects = this.getProjects.bind(this);
    }

    async getProjects(){
        await axios({
            method: 'get', //you can set what request you want to be
            url: 'http://localhost:8080/project/' + this.state.id,
            data: {},
            headers: {
              "Authorization": getCookie("Authorization")
            }
          }).then(res => {
  
          this.setState({project : res.data});
          this.setState({isLoading : false});
            
        }).catch(error => {
          console.log(error);
        });
      }

    componentDidMount(){
        this.getProjects();
    }
    
    render() {
        let sensors = <p>Sensors not found</p>
        
        if(this.state.project.sensors != undefined && this.state.project.sensors.length > 0){
            sensors = this.state.project.sensors.map(sensor => <Sensor id={sensor}/>)
        }


        return ( 
            <div>
                <Row gutter={[16, 16]}>
                    <Col span={2}>
                        <ProjectNavigation/>
                    </Col>

                    <Col span={16} />

                    <Col span={2}>
                        <SensorFrom value={this.state.id}/>
                    </Col>

                    <Col span={4}>
                        <ProjectEditForm value={this.state.id}/>
                    </Col>
                    
                </Row>
                {sensors}
            </div>
         );
    }
}
 
export default Project;