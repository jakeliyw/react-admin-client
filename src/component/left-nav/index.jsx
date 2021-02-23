import React, { Component } from "react"
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';
import './index.less'
/*
* 左侧导航组件
*
* */
const { SubMenu } = Menu;
export default class LeftNav extends Component {
  render() {
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo"/>
          <h1>硅谷后台</h1>
        </Link>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart"/>
            <span>首页</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail"/>
                <span>商品名称</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Icon type="pie-chart"/>
              <span>品类管理</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="pie-chart"/>
              <span>商品管理</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
