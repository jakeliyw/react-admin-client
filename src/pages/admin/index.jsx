import LeftNav from "../../component/left-nav";
import Header from "../../component/header"
import React, { Component }  from "react"
import memoryUtils from "../../utils/memoryUtils";
import { Redirect } from 'react-router-dom'
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
          <Content style={{backgroundColor: '#fff'}}>Content</Content>
          <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用Chrome浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    )
  }
}
