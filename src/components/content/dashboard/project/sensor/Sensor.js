import React, { Component } from 'react';
import axios from 'axios';
import {Row, Col, Spin} from 'antd';
import './Sensor.css';
import Loading from '../Loading';
import ChartValue from './chart/ChartValue';
import SensorEditForm from './SensorEditForm';
import getCookie from '../../../../cookie/getCookie';
import SensorState from './SensorState';
import {api} from '../../../../Properties';

class Sensor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id : this.props.id,
            sensor : {},

            isLoading : true
        }

        this.getSensor = this.getSensor.bind(this);
        this.generateInput = this.generateInput.bind(this);
    }

    async getSensor(){
        await axios({
            method: 'get', //you can set what request you want to be
            url: api + "/sensor/" + this.state.id,
            data: {},
            headers: {
              "Authorization": getCookie("Authorization")
            }
          }) .then(res => {
  
          this.setState({sensor : res.data});
          this.setState({isLoading : false});
            
        }).catch(error => {
          console.log(error);
        });
      }

    componentDidMount(){
        this.getSensor();
    }

    generateInput(state, checkedKey){
        if(state.key == checkedKey){
            return (
                <div>
                    <input type="radio" name={state.key} value={state.key}
                        checked/>
                    <label for={state.key}>{state.key}</label>
                </div>);
        } else {
            return(
                <div>
                    <input type="radio" name={state.key} value={state.key}/>
                    <label for={state.key}>{state.key}</label>
                </div>
                );
        }
    }

    render() { 
        if(this.state.isLoading){
            return (
                <Loading/>
            );
        }

        

        return (
            <div className="Sensor">
                
                <Row gutter={[8, 8]}>

                    <Col span={8}>
                        <p>
                            <strong>{this.state.sensor.name}</strong> - <i>{this.state.sensor.token}</i>
                        </p>

                        <p>
                            <SensorState sensor={this.state.sensor}/>
                        </p>

                    </Col>

                    <Col span={16}>
                        <SensorEditForm entityId={this.state.id}/>
                    </Col>

                </Row>
                
                <ChartValue token={this.state.sensor.token}/>
                
            </div>
        );
        
    }
}
 
export default Sensor;