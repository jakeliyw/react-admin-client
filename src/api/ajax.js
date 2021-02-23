/*
* 异步发起请求
* 封装了axios库
* */
import axios from "axios";
import { message } from 'antd'

export default function  ajax(url, data= {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    // 1.执行异步ajax请求
    if(method === 'GET') { // 发起get请求
      promise =  axios.get(url, {
        params: data
      })
    } else {
      promise = axios.post(url, data)
    }
    // 2.成功，调用resolve(value)
    promise.then(res => {
      resolve(res.data)
      // 3.失败,不调用reject(reason)，而是提示异常信息
    }).catch(error => {
      message.error('请求出错了：' + error.message)
    })
  })
}
