/**   
 * api接口统一管理
 */
import { get, post } from './http'

export const apiLogin = params => post('/base/api/auth/loginByUserPwd', params);