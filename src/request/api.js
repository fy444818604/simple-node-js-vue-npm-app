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
export const loginImg = params => get('/base/api/auth/checkCode/image', params);
/**
 * 基础数据系统接口
 */
/*基础数据*/
export const areasTree = params => get('/base/api/cities/tree',params);
//学区管理
export const school = params => post('/base/api/eduarea/page',params);
export const schoolAdd = params => post('/base/api/eduarea/add',params);
export const schoolEdi = params => post('/base/api/eduarea/update',params);
export const schoolDis = params => post('/base/api/eduarea/update/status',params);
//学段管理
export const phase = params => post('/base/api/grade/page',params);
//科目管理
export const subjects = params => post('/base/api/subjectMgr/subjectInfo/list',params);
export const subjectsAdd = params => post('/base/api/subjectMgr/subjectInfo/save',params);
export const subjectsEdi = params => post('/base/api/subjectMgr/subjectInfo/update',params);
export const subjectsDis = params => get('/base/api/subjectMgr/subjectInfo/setStatusById',params);
//下拉框字典
export const dictSelect = params => post('/base/api/dict/select',params);
//建筑场所
export const areaList = params => post('/base/api/buildings/page',params);
export const areaDis = params => post('/base/api/buildings/update/status',params);
export const areaAdd = params => post('/base/api/buildings/add',params);
export const areaEdi = params => post('/base/api/buildings/update',params);
//教师设置
export const settingList = params => post('/base/api/classroom/page',params);
//教职工账号管理
export const teachers = params => post('/base/api/userInfo/teacherInfo/list',params);
//学生账号管理
export const students = params => post('/base/api/userInfo/studentInfo/list',params);
export const studentsAdd = params => post('/base/api/userInfo/studentInfo/save',params);
//机构树
export const institutions = params => get('/base/api/organizationUnit/all',params);
//学届管理
export const learnSelect  = params => get('/base/api/grade/select',params);
//班级管理
export const classSelect  = params => get('/base/api/class/select',params);








/**
 * 资源平台接口
 */


