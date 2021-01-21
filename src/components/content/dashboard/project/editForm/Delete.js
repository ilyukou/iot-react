import React, { Component } from 'react';
import getCookie from '../../../../cookie/getCookie';
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
      await axios({
        method: 'delete', //you can set what request you want to be
        url: "http://localhost:8080/" + this.state.entity + "/" + this.state.id,
        data: {},
        headers: {
          "Authorization": getCookie("Authorization")
        }
      }).then(res => {
                if(this.state)
                message.success(this.state.entity + ' deleted');
            }).catch(error => {
                message.error(this.state.entity + " didn't delete");
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