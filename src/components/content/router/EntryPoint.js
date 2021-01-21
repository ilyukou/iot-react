import React, { Component } from 'react';

import {Tabs} from 'antd';

import SignUp from '../entryPoint/SignUp';
import SignIn from '../entryPoint/SignIn';

class EntryPoint extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    render() {

        return (
            <Tabs defaultActiveKey="1">

                <Tabs.TabPane tab="Sing In" key="1">
                    <SignIn/>
                </Tabs.TabPane>

                <Tabs.TabPane tab="Sing Up" key="2">
                    <SignUp/>
                </Tabs.TabPane>
            </Tabs>
        );
    }
}
 
export default EntryPoint;