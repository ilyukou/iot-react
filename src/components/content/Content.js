import React, { Component } from 'react';

import '../ApplicationRouter.css';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

import ContentBrowserRouterSwitch from './ContentBrowserRouterSwitch';
import ContentMenu from './ContentMenu';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          collapsed: false,
          projects: [],
          isLoading : true,
          header : "Authorization"
        }
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed
        });
      };

    render() {

      return (
        <Layout>

          <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <ContentMenu value={this.state.projects}/>
          </Layout.Sider>

          <Layout className="site-layout">
            <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Layout.Header>

            <Layout.Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 600,
              }}>

              <ContentBrowserRouterSwitch/>
              
            </Layout.Content>
          </Layout>
        </Layout>        
      );
    }
}
 
export default Content;