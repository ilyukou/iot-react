import React, { Component } from 'react';

import axios from 'axios';

import {
    DeleteOutlined
  } from '@ant-design/icons';

import {message, Modal, Input} from 'antd';

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            entity : this.props.entity,
            id : this.props.entityId,

            visible: false
        }

        this.deleteEntity = this.deleteEntity.bind(this);
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
    handleOk = e => {
        this.setState({
          visible: false
        });
      };
    
      handleCancel = e => {
        this.setState({
          visible: false
        });
      };

    async deleteEntity(){
        await axios.delete("http://localhost:8080/project/" + this.state.id)
            .then(res => {
                message.success('Project deleted');
            }).catch(error => {
                message.error("Project didn't delete");
            });
        this.handleOk();
    }
    
    render() { 
        return (
            <div>
                <DeleteOutlined onClick={this.showModal}/>
                <Modal
                    title="Warning"
                    visible={this.state.visible}
                    onOk={this.deleteEntity}
                    onCancel={this.handleCancel}
                    >
                    <p>
                        <strong>Delete this {this.state.entity} ?</strong>
                    </p>
                </Modal>
            </div>
        );
    }
}
 
export default Delete;