import React, { Component }  from "react"
import './index.less'
import logo from '../../assets/images/logo.png'
import { Form, Icon, Input, Button } from 'antd';
/*
* 登录路由组件
* */
class Login extends Component {
  handleSubmit = (event) => {
    // 阻止事件的默认行为
    event.preventDefault()
    this.props.form.validateFields((err, values) => {
      // 校验成功
      if (!err) {
        console.log('提交登录的ajax请求', values);
      } else {
        console.log('校验失败')
      }
    });
    // 得到form对象
    // const form = this.props.form
    // // 获取表单项的输入数据
    // const values = form.getFieldsValue()
    // console.log(values)
  }
  // 自定义验证
  validatePwd = (rule, value, callback) => {
    if(!value) {
      callback('密码不能为空')
    } else if (value.length < 4 ) {
      callback('密码长度不能小于4位')
    } else if (value.length > 12 ) {
      callback('密码长度不能大于12位')
    } else if (!/^[a-zA-Z-0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成')
    } else {
      // 验证通过
      callback()
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"/>
          <h1>React项目： 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {
                getFieldDecorator('username', {
                  // 声明式验证
                rules: [
                  { required: true, whitespace: true, message: '用户名不能为空' },
                  { min: 4, message: '用户名至少4位' },
                  { max: 12, message: '用户名最多12位' },
                  { pattern: /^[a-zA-Z-0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }
                ],
              })
                (<Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入用户名"
                />)
              }
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{
                  validator: this.validatePwd
                }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请输入密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

/*
* 1.高阶函数
*
* 2.高阶组件
* */
const wrapLogin = Form.create()(Login)
export default wrapLogin
/*
* 前台表单验证
* 收集表单输入数据
* */
