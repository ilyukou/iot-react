import React, { Component } from 'react';
import axios from 'axios';
import {Row, Col, Spin} from 'antd';
import './Sensor.css';
import Loading from '../Loading';
import ChartValue from './chart/ChartValue';
import SensorEditForm from './SensorEditForm';

class Sensor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id : this.props.id,
            sensor : {},

            isLoading : true
        }

        this.getSensor = this.getSensor.bind(this);
    }

    async getSensor(){
      
        await axios.get("http://localhost:8080/sensor/" + this.state.id)
        .then(res => {
  
          this.setState({sensor : res.data});
          this.setState({isLoading : false});
            
        }).catch(error => {
          console.log(error);
        });
      }

    componentDidMount(){
        this.getSensor();
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