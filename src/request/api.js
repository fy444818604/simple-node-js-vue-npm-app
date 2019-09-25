/**   
 * api接口统一管理
 */
import { get, post } from './http'

//登录模块
export const apiLogin = params => post('/base/api/auth/loginByUserPwd', params);