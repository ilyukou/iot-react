import React, { Component } from 'react';


import { Statistic, Row, Col} from 'antd';

class SensorTitle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : this.props.value
        }
    }

    render() { 
        return (
            <div>
                <p>
                    <strong>{this.state.data.name}</strong> - <i>{this.state.data.value.value}</i>
                </p>
            </div>
        );
    }
}
 
export default SensorTitle;