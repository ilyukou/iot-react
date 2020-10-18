import React, { Component } from 'react';

class SensorTitle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : this.props.value
        }
    }

    render() {
        let name = this.state.data.name;

        let value = "not found";

        if(this.state.data.value.value != undefined){
            value = this.state.data.value.value;
        }

        return (
            <div>
                <strong>{name}</strong> - <i>{value}</i>
            </div>
        );
    }
}
 
export default SensorTitle;