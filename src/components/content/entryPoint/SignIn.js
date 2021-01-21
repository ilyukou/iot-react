import React, { Component } from 'react';
import axios from 'axios';

import {Form, Input, Button} from 'antd';

import setCookie from '../../cookie/setCookie';
import removeCookie from '../../cookie/removeCookie';

import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirect : false
         }

        this.signIn = this.signIn.bind(this);
    }

    async signIn(values){
        await axios.post("http://localhost:8080/auth/signIn", values)
        .then(res =>{
            console.log(res.data.token);
            this.setState({redirect : true});
            removeCookie("Authorization");
            setCookie("Authorization", res.data.token);
        });
    }

    render() {

        if(this.state.redirect){
            return <Redirect to="/" />
        }

        return (
            <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      
      onFinish={this.signIn}
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
          Sign In
        </Button>
      </Form.Item>
    </Form>
        );
    }
}
 
export default SignIn;