import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import {
    ArrowLeftOutlined,
  } from '@ant-design/icons';
  

class ProjectNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Link to={"/dashboard"}>
        <h3><ArrowLeftOutlined /> Back</h3>
    </Link>  );
    }
}
 
export default ProjectNavigation;