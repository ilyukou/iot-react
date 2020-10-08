import React, { Component } from 'react';
import axios from 'axios';

import {sensorApiUrl} from '../../Properties';

import SensorList from './SensorList';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : this.props.value,
            sensors : [],
            isLoading : true
        }

        this.getSensorInfo = this.getSensorInfo.bind(this);
    }

    async getSensorInfo(id){
        await axios.get(sensorApiUrl + "/" + id)
            .then(res => {
                this.state.sensors.push(res.data);
                this.setState({isLoading : false});

            }).catch(error => {
                console.log(error);
            });
    }

    componentDidMount(){
        this.state.data.sensors.forEach(id => this.getSensorInfo(id));
    }

    render() { 
        return ( 
            <div>
                {this.state.data.name}
                <div><SensorList value={this.state.sensors}/></div>
            </div>
        );
    }
}
 
export default Project;