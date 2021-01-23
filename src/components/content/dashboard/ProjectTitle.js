import React, { Component } from 'react';
import axios from 'axios';

import getCookie from '../../cookie/getCookie';

import './ProjectTitle.css';
import {Link, useParams} from 'react-router-dom';
import {sensorApiUrl} from '../../Properties';
import 'antd/dist/antd.css';
import { Card, Statistic} from 'antd';
import SensorTitle from './SensorTitle';
import {api} from '../../Properties';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projectId : this.props.id,
            data : {},
            sensors : [],
            isLoading : true
        }

        this.getSensorInfo = this.getSensorInfo.bind(this);
        this.getProjectInfo = this.getProjectInfo.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    async getProjectInfo(){
        await axios({
            method: 'get', //you can set what request you want to be
            url: api +'/project/' + this.state.projectId,
            data: {},
            headers: {
              "Authorization": getCookie("Authorization")
            }
          }).then(res => {
            console.log(res.data);
            this.setState({data : res.data});
            this.state.data.sensors.forEach(id => this.getSensorInfo(id));
            this.setState({isLoading : false});
          }).catch(e => {
              // ignore
          })
    }


    async getSensorInfo(id){
        await axios({
            method: 'get', //you can set what request you want to be
            url: sensorApiUrl + "/" + id,
            data: {},
            headers: {
              "Authorization": getCookie("Authorization")
            }
          }).then(sensorData => {
                
                let value = this.getValue(sensorData.data.token);

                value.then(res => {
                    let sensor = {
                        "id" : sensorData.data.id,
                        "project" : sensorData.data.project,
                        "name" : sensorData.data.name,
                        "token" : sensorData.data.token,
                        "value" : res
                    }
                    console.log("sensor");
                    console.log(sensor);
                    this.state.sensors.push(sensor);
                    this.setState({isLoading : false});
                });
            }).catch(error => {
                console.log("error");
                console.log(error);
            });
    }

    async getValue(token){
        let result = {};
        await axios.get(api + "/value/" + token)
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
        this.getProjectInfo();
    }

    render() {
        const gridStyle = {
            width: '100%',
            textAlign: 'left',
          };

        let sensorsStatistic;
        
        if(this.state.isLoading){
            return (
                <div>Loading ...</div>
            );
        }

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
                extra={<Link to={"/dashboard?projectId=" + this.state.data.id}>More</Link>}
                style={{ width: 300 }}>
                {sensorsStatistic}
            </Card>
        );
    }
}