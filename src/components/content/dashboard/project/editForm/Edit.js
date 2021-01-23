import React, { Component } from 'react';
import getCookie from '../../../../cookie/getCookie';
import axios from 'axios';

import {
    EditOutlined
  } from '@ant-design/icons';

import {message, Modal, Input} from 'antd';

import {api} from '../../../../Properties';

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
            "name" : document.getElementById("editInput" + this.state.entity + this.state.id).value
        }
        await axios({
          method: 'put', //you can set what request you want to be
          url: api + "/" + this.state.entity + "/" + this.state.id,
          data: editEntity,
          headers: {
            "Authorization": getCookie("Authorization")
          }
        }).then(res => {
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
                    <Input placeholder="New name" id={"editInput" + this.state.entity + this.state.id}/>
                    </Modal>
            </div>
        );
    }
}
 
export default Edit;