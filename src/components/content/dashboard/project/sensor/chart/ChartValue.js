import React, { Component } from 'react';
import axios from 'axios';
import ReactChart from './ReactChart';
import Loading from '../../Loading';
import {api} from '../../../../../Properties';

class ChartValue extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            token : this.props.token,
            values : [],

            isLoading : true
        }

        this.getValues = this.getValues.bind(this);
    }

    async getValues(){
        await axios.get(api + "/value/all/" + this.state.token)
        .then(res => {
  
          this.setState({values : res.data});
          this.setState({isLoading : false});
            
        }).catch(error => {
          console.log(error);
        });
    }

    componentDidMount(){
        this.getValues();
    }

    render() { 
        if(this.state.isLoading){
            return (
                <Loading/>
            );
        }

        if(this.state.values.length > 0){
            let points = [];

            this.state.values.map(val => {
                let point = [val.time, val.value];
                points.push(point);
            });

            return (
                <div>
                    <ReactChart points={points}/>
                </div>
            );
        }

        return (
            <div>
                <p>Values not found</p>
            </div>
        );

    }
}
 
export default ChartValue;