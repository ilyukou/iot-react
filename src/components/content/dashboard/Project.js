import React, { Component } from 'react';
import axios from 'axios';

import './Project.css';
import {Link, useParams} from 'react-router-dom';
import {sensorApiUrl} from '../../Properties';
import 'antd/dist/antd.css';
import { Card, Statistic} from 'antd';
import SensorList from './SensorList';
import SensorTitle from './SensorTitle';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : this.props.value,
            sensors : [],
            isLoading : true
        }

        this.getSensorInfo = this.getSensorInfo.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    async getSensorInfo(id){
        await axios.get(sensorApiUrl + "/" + id)
            .then(sensorData => {
                
                let value = this.getValue(sensorData.data.token);

                value.then(res => {
                    let sensor = {
                        "id" : sensorData.data.id,
                        "project" : sensorData.data.project,
                        "name" : sensorData.data.name,
                        "token" : sensorData.data.token,
                        "value" : res
                    }
    
                    console.log(sensor);
                    this.state.sensors.push(sensor);
                    this.setState({isLoading : false});
                });
            }).catch(error => {
                console.log(error);
            });
    }

    async getValue(token){
        let result = {};
        await axios.get("http://localhost:8080/value/" + token)
            .then(res => {
                console.log("getValue:success");
                console.log(res.data);
                result = res.data;

            }).catch(error => {
                console.log("getValue:error");
                console.log(error);
            });

        return result;
    }

    componentDidMount(){
        this.state.data.sensors.forEach(id => this.getSensorInfo(id));
    }

    render() {
        const gridStyle = {
            width: '100%',
            textAlign: 'left',
          };

        let sensorsStatistic;
        
        if(this.state.sensors.length > 0){ // this.state.sensors == 1
            sensorsStatistic = this.state.sensors.map(sensor => 
                <Card.Grid style={gridStyle}>
                    <SensorTitle value={sensor}/>
                </Card.Grid>   
            );
        } else { 
            sensorsStatistic = <Card.Grid hoverable={false} style={gridStyle}>
                <p>Not found sensor for this project</p>
                </Card.Grid>;
        }
        
        return ( 
            <Card
                size="small"
                title={this.state.data.name}
                extra={<Link to={"/dashboard/" + this.state.data.id}>More</Link>}
                style={{ width: 300 }}>
                {sensorsStatistic}
            </Card>
        );
    }
}
 