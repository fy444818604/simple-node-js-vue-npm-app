/**
 * api接口统一管理
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
import { get, post } from './http'

/**
 * 登录模块接口
 */
export const apiLogin = params => post('/base/api/auth/loginByUserPwd', params);

/**
 * 基础数据系统接口
 */
/*行政区域树形接口*/
export const areasTree = params => get('/base/api/cities/tree/0',params);
/*
/!*学区管理分页查询*!/
export const school = params => post('/base/api/eduarea/page',params);


export default const school = (val) => params => post('/base/api/eduarea/page',params);*/

