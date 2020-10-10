import React, { Component } from 'react';

import axios from 'axios';

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
        }

        this.getProjects = this.getProjects.bind(this);
    }

    componentDidMount(){
      this.getProjects();
    }

    async getProjects(){
      
      await axios.get("http://localhost:8080/project/all")
      .then(res => {

        if(res.data.length > 0){
          this.setState({projects : res.data});
          this.setState({isLoading : false});
        }
          
      }).catch(error => {
        console.log(error);
      });
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed
        });
      };

    render() {
        if(this.state.isLoading){
          return (
            <div>Loading...</div>
          );

        } else {

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
  
                  <ContentBrowserRouterSwitch value={this.state.projects}/>
                  
                </Layout.Content>
              </Layout>
            </Layout>         
          );
        }
    }
}
 
export default Content;