import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import '../ApplicationRouter.css';

import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {
  BarChartOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';

class ContentMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { projects : this.props.value, }
    }

    render() {
        console.log("ContentMenu");
        console.log(this.state.projects);

        let menuItem = this.state.projects
            .map(project => <Menu.Item key={project.id}>{project.name}</Menu.Item>)

        let menu = <Menu.SubMenu key="sub2" icon={<FolderOpenOutlined />} title="Projects">
            {menuItem}</Menu.SubMenu>
            
        return (
            <Menu theme="dark" mode="inline" >

                <Menu.Item key="2" icon={<BarChartOutlined />}>
                    <Link to={"/dashboard"}>Dashboard</Link>
                </Menu.Item>
            </Menu>
        );
    }
}
 
export default ContentMenu;