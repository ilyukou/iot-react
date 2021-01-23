import React, { Component } from 'react';

import {Form, Input, Button} from 'antd';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {api} from '../../Properties';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirect : false
         }

        this.signUp = this.signUp.bind(this);
    }

    async signUp(values){
        await axios.post(api + "/auth/signUp", values)
        .then(res =>{
            console.log(res.data.token);
            this.setState({redirect : true});

        });
    }

    render() {
        
        if(this.state.redirect){
            return <Redirect to="/login" />
        }
        
        return ( <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.signUp}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form> );
    }
}
 
export default SignUp;