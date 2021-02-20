/*
* 异步发起请求
* 封装了axios库
* */
import axios from "axios";

export default function  ajax(url, data= {}, method = 'GET') {
  if(method === 'GET') { // 发起get请求
    return axios.get(url, {
      params: data
    })
  } else {
    return axios.post(url, data)
  }
}
