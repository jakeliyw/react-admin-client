/*
* 包含应用中所有模块需要的api
* */
import ajax from './ajax'
// 登录
export const reqLogin = (username,password) => ajax('/login', { username, password}, 'POST')

// 添加用户
export const reqAddUser = (user) => ajax('/manage/user/add', user, 'POST')
