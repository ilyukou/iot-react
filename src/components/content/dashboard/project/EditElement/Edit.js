import React, { Component } from 'react';

import axios from 'axios';

import {
    EditOutlined
  } from '@ant-design/icons';

import {message, Modal, Input} from 'antd';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            entity : this.props.entity,
            id : this.props.entityId,

            visible: false
        }

        this.editEntity = this.editEntity.bind(this);
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

    async editEntity(){
        let editEntity = {
            "name" : document.getElementById("editInput").value
        }
        await axios.put("http://localhost:8080/project/" + this.state.id, editEntity)
            .then(res => {
                message.success('Name changed');
            }).catch(error => {
                message.error("Name didng't change");
            });
        this.handleOk();
    }
    
    render() {

        return (
            <div>
                <EditOutlined onClick={this.showModal}/>
                <Modal
                    title={"Edit " + this.state.entity}
                    visible={this.state.visible}
                    onOk={this.editEntity}
                    onCancel={this.handleCancel}
                    >
                    <Input placeholder="New name" id="editInput"/>
                    </Modal>
            </div>
        );
    }
}
 
export default Edit;