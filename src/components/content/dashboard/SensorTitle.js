import React, { Component } from 'react';

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
                <strong>{this.state.data.name}</strong> - <strong>{this.state.data.value.value}</strong>
            </div>
        );
    }
}
 
export default SensorTitle;