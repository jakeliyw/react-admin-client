import LeftNav from "../../component/left-nav";
import Header from "../../component/header"
import React, { Component }  from "react"
import memoryUtils from "../../utils/memoryUtils";
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../../pages/home'
import Category from '../../pages/category'
import Product from '../../pages/product'
import Role from '../../pages/role'
import User from '../../pages/user'
import Bar from '../../pages/charts/bar'
import Line from '../../pages/charts/line'
import Pie from '../../pages/charts/pie'

import { Layout } from 'antd'
const { Footer, Sider, Content } = Layout
/*
* 后台管理路由组件
* */
export default class Admin extends Component {
  render() {
    const user =  memoryUtils.user
    // 如果内存中没有存储user, 当前没有登录
    if(!user || !user._id) {
      // 自动跳转到登录
      return <Redirect to='/login'/>
    }
    return (
      <Layout style={{ height: '100%'}}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{margin: 20,  backgroundColor: '#fff'}}>
            <Switch>
              <Route path="/home" component={ Home } />
              <Route path="/category" component={ Category }/>
              <Route path="/product" component={ Product}/>
              <Route path="/role" component={ Role }/>
              <Route path="/user" component={ User }/>
              <Route path="/charts/bar" component={ Bar }/>
              <Route path="/charts/line" componet={ Line }/>
              <Route path="/charts/pie" component={ Pie }/>
              <Redirect to="/home"/>
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用Chrome浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    )
  }
}
