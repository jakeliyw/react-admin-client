/*
* 包含应用中所有模块需要的api
* */
import ajax from './ajax'
// 登录

const BASE = ''
export const reqLogin = (username,password) => ajax(BASE + '/login', { username, password}, 'POST')

// 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')
