import React, { Component } from 'react';

import {Row, Col} from 'antd';

import Edit from './EditElement/Edit';
import Delete from './EditElement/Delete';

class ProjectEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id : this.props.value
         }
    }
    render() { 
        return (
            <h2>
                <Row gutter={[8, 8]}>
                    <Col span={12}>
                        <Edit entity={"project"} entityId={this.state.id}/>
                    </Col>
                    <Col span={12}>
                        <Delete entity={"project"} entityId={this.state.id}/>
                    </Col>
                </Row>
            </h2>
        );
    }
}
 
export default ProjectEditForm;