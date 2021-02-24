import React, { Component } from "react"
import logo from '../../assets/images/logo.png'
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig'
import './index.less'
/*
* 左侧导航组件
*
* */
const { SubMenu } = Menu;
class LeftNav extends Component {
  // 根据menu的数据数组生成对应的标签数组, map递归调用
  getMenuNodes_map =(menuList) => {
    return menuList.map(item => {
      if(!item.children) {
        return (
          <Menu.Item key={item.key}>
          <Link to={item.key}>
            <Icon type={item.icon}/>
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </span>
            }
          >
            {
              this.getMenuNodes(item.children)
            }
          </SubMenu>
        )
      }
    })
  }
  // reduce 递归调用
  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname
    return menuList.reduce((pre, item) => {
      if (!item.children) {
        pre.push((
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon}/>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        ))
      } else  {
        // 查找一个与当前路径匹配的子item
        const cItem = item.children.find(cItem => cItem.key === path)
        if (cItem) {
          // 如果存在，说明当前item的子列表需要打开, 将key存入到this
          this.openKey = item.key
        }
        // 添加子的
        pre.push((
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </span>
            }
          >
            {
              this.getMenuNodes(item.children)
            }
          </SubMenu>
        ))
      }
      return pre
    }, [])
  }
  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList)
  }

  render() {
    const path = this.props.location.pathname
    const openKey = this.openKey
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo"/>
          <h1>硅谷后台</h1>
        </Link>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={openKey}
          mode="inline"
          theme="dark"
        >
          {
            this.menuNodes
          }
        </Menu>
      </div>
    )
  }
}
// 包装非路由组件，返回一个新组件
export default withRouter(LeftNav)
