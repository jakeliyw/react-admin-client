/*
* 包含应用中所有模块需要的api
*
*
* */
import ajax from './ajax'
import jsonp from 'jsonp'
import { message } from "antd";

// 登录
const BASE = ''
export const reqLogin = (username,password) => ajax(BASE + '/login', { username, password}, 'POST')

// 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')

// jsonp请求的接口请求函数
export const reqWeather = (city) => {
  return new Promise((res,rej) => {
    const url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=b9eb4ee24671a32dac2d0d91aa9390f3`
    jsonp(url, {}, (err, data) => {
      if(!err && data.status === '1') {
        // 取出需要的数据
        const { weather } = data.lives[0]
        res(weather)
      } else {
        // 如果失败
        message.error('获取天气信息失败')
      }
    })
  })
}
reqWeather('441300')
