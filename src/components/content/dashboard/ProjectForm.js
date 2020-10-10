import React, { Component } from 'react';
import axios from 'axios';
import './ProjectForm.css';
import { Collapse, Form, Input, Button, Checkbox } from 'antd';

class ProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.callback = this.callback.bind(this);
        this.createProject = this.createProject.bind(this);
    }

    callback(key){
        console.log(key);
    }

    async createProject(value){
        console.log("Create project");

        await axios.post("http://localhost:8080/project", value).then(res => {
            console.log(res.data);
        }).catch(res => {
            console.log(res.data);
        });
    }

    render() {

          const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 8,
              span: 16,
            },
          };
        
        return (
            <Collapse onChange={this.callback} >
                <Collapse.Panel header="Create new Project" key="1" id="ProjectForm">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.createProject}
                    >
                    <Form.Item
                        label="Project name"
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input project name',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                    </Form>
                </Collapse.Panel>
            </Collapse>
      );
    }
}
 
export default ProjectForm;