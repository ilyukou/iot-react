import React, { Component } from 'react';

import axios from 'axios';

import {
    PlusOutlined
  } from '@ant-design/icons';

import {message, Modal, Input} from 'antd';

class SensorForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            projectId : this.props.value,

            visible: false
        }

        this.createSensor = this.createSensor.bind(this);
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        this.setState({
          visible: false,
        });
      };

    async createSensor(){
        let editEntity = {
            "name" : document.getElementById("sensorNameInput").value,
            "project" : this.state.projectId
        }

        await axios.post("http://localhost:8080/sensor", editEntity)
            .then(res => {
                message.success('Sensor created');
            }).catch(error => {
                message.error("Sensor didng't create");
            });
        this.handleOk();
    }

    render() { 
        return (
            <h2>
                <PlusOutlined onClick={this.showModal}/>
                <Modal
                    title={"Create sensor"}
                    visible={this.state.visible}
                    onOk={this.createSensor}
                    onCancel={this.handleCancel}
                    >
                    <Input placeholder="Sensor name" id="sensorNameInput"/>
                    </Modal>
            </h2>
        );
    }
}
 
export default SensorForm;