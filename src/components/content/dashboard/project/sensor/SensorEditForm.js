import React, { Component } from 'react';
import {Row, Col} from 'antd';

import Edit from '../editForm/Edit';
import Delete from '../editForm/Delete';

class SensorEditPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sensorId : this.props.entityId
        }
    }

    render() { 
        return ( 
            <h2>
                <Row gutter={[8, 8]}>
                    <Col span={16}/>
                    <Col span={4}>
                        <Edit entity={"sensor"} entityId={this.state.sensorId}/>
                    </Col>
                    <Col span={4}>
                        <Delete entity={"sensor"} entityId={this.state.sensorId}/>
                    </Col>
                </Row>
            </h2>
        );
    }
}

export default SensorEditPanel;