import React, { Component } from 'react';
import axios from 'axios';

import {valueApiUrl} from '../../Properties';

class Sensor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : this.props.value,
            value : {},
            isLoading : true
        }

        this.getValue = this.getValue.bind(this);
    }

    async getValue(){
        await axios.get(valueApiUrl + "/" + this.state.data.token)
            .then(res => {
                this.setState({value : res.data});
                this.setState({isLoading : false});

            }).catch(error => {
                console.log(error);
            });
    }

    componentDidMount(){
        this.getValue();
    }

    render() { 
        return ( 
            <div>
                <label>{this.state.data.name} - {this.state.data.token}</label>
                <div>{this.state.value.value}</div>
            </div>
        );
    }
}
 
export default Sensor;