import React, { Component } from 'react';

import Sensor from './Sensor';

class SensorList extends Component {
    constructor(props) {
        super(props);
        this.state = { sensors : this.props.value, }
    }
    
    render() {
        let sensors = this.state.sensors.map(sensor => <li><Sensor value={sensor}/></li>)
        
        return (
            <div>
                <ul>
                    {sensors}
                </ul>
            </div>
        );
    }
}
 
export default SensorList;