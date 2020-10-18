import React, { Component } from 'react';

import {Row, Col, Spin} from 'antd';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row gutter={[8, 8]}>
                <Col span={11}/>
                <Col span={2}>
                        <Spin />
                </Col>
                <Col span={11}/>
            </Row>
        );
    }
}
 
export default Loading;