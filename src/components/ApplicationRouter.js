import React, {Component} from 'react';

import Content from './content/Content';

import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';

class ApplicationRouter extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false }
    }

    render() { 
        return (
            <BrowserRouter>
                <Content/>
            </BrowserRouter>
        );  
    }
}
 
export default ApplicationRouter;