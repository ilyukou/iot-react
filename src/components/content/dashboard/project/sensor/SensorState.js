import React, { Component } from 'react';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import axios from 'axios';

class SensorState extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sensor : this.props.sensor,
            currentState : this.props.sensor.currentState
         }

         this.getMenu = this.getMenu.bind(this);
         this.getMenuItem = this.getMenuItem.bind(this);
         this.onClick = this.onClick.bind(this);

         this.setCurrentState = this.setCurrentState.bind(this);
    }

    async setCurrentState(state){
        await axios({
            method: 'put', //you can set what request you want to be
            url: "http://localhost:8080/sensorState/" + this.state.sensor.token + "?state=" + state,
            data: {}
          }) .then(res => {

            this.setState({...this.state.sensor, currentState: state});
            this.setState({currentState: state});

        }).catch(error => {

        });
      }

    onClick = ({ key }) => {
        this.setCurrentState(key);
        message.info(`State changed to ${key}`);
    };

    getMenu(){ 

        return (
            <Menu onClick={this.onClick}>
                {this.state.sensor.states.map(state => 
                    this.getMenuItem(state)
                    )}
            </Menu>
        );
    }

    getMenuItem(state){
        if(state.key != this.state.currentState){
            return (
                <Menu.Item key={state.key}>{state.key}</Menu.Item>
            );
        }
    }


    render() {
        return (
            <div>
                <strong>Current state</strong> - 
                <Dropdown overlay={this.getMenu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {this.state.currentState}<DownOutlined />
                    </a>
                </Dropdown>
            </div>

        );
    }
}
 
export default SensorState;