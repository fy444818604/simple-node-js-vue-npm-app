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
export const loginExit = params => post('/base/api/auth/logout', params);
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
export const schoolSelect = params => get('/base/api/eduarea/getSelectByOrgId',params);
//科目管理
export const subjects = params => post('/base/api/subjectMgr/subjectInfo/list',params);
export const subjectsAdd = params => post('/base/api/subjectMgr/subjectInfo/save',params);
export const subjectsEdi = params => post('/base/api/subjectMgr/subjectInfo/update',params);
export const subjectsDis = params => get('/base/api/subjectMgr/subjectInfo/setStatusById',params);
export const subjectSelect = params => get('/base/api/subjectMgr/subjectInfo/getKeyAndValue',params);
//教材版本
export const phase = params => post('/base/api/subjectMgr/textbookVersions/list',params);
export const phaseState = params => get('/base/api/subjectMgr/textbookVersions/setStatusById',params);
export const phaseAdd = params => post('/base/api/subjectMgr/textbookVersions/save',params);
export const phaseEdi = params => post('/base/api/subjectMgr/textbookVersions/update',params);
//知识点管理
export const knowledge = params => post('/base/api/subjectMgr/points/list',params);
export const knowledgeAdd = params => post('/base/api/subjectMgr/points/save',params);
export const knowledgeState = params => post('/base/api/subjectMgr/points/setStatusBatch',params);
export const knowSinState = params => get('/base/api/subjectMgr/points/setStatusById',params);
export const knowEdi = params => post('/base/api/subjectMgr/points/update',params);
//下拉框字典
export const dictSelect = params => post('/base/api/dict/select',params);
//字典分页查询
export const dictPage = params => post('/base/api/dict/page',params);
//字典启用停用
export const dictDis = params => post('/base/api/dict/update/status',params);
//字典
export const dictAdd = params => post('/base/api/dict/add',params);
export const dictEdit = params => post('/base/api/dict/update',params);
//建筑场所
export const areaList = params => post('/base/api/buildings/page',params);
export const areaDis = params => post('/base/api/buildings/update/status',params);
export const areaAdd = params => post('/base/api/buildings/add',params);
export const areaEdi = params => post('/base/api/buildings/update',params);
export const areaSelect = params => get('/base/api/buildings/select',params);
//教师设置
export const settingList = params => post('/base/api/classroom/page',params);
//教职工账号管理
export const teachers = params => post('/base/api/userInfo/teacherInfo/list',params);
export const teachersAdd = params => post('/base/api/userInfo/teacherInfo/save',params);
export const teachersPassword = params => post('/base/api/userInfo/teacherInfo/resetPasswordBatch',params);
export const teachersDis = params => post('/base/api/userInfo/teacherInfo/setStatusBatch',params);
export const teachersDisT = params => get('/base/api/userInfo/teacherInfo/setStatusById',params);
export const teachersDetails = params => get('/base/api/userInfo/teacherInfo/getInfoById',params);
export const teachersSelect = params => get('/base/api/userInfo/teacherInfo/getKeyAndValue',params);
export const teacherSdetAdd = params => post('/base/api/userInfo/teacherInfo/update',params);
//学生账号管理
export const students = params => post('/base/api/userInfo/studentInfo/list',params);
export const studentsAdd = params => post('/base/api/userInfo/studentInfo/save',params);
export const batStudentsDis = params => post('/base/api/userInfo/studentInfo/setStatusBatch',params);
export const batPassword = params => post('/base/api/userInfo/studentInfo/resetPasswordBatch',params);
export const studentsDis = params => get('/base/api/userInfo/studentInfo/setStatusById',params);
export const batStudentsExport = params => post('/base/api/userInfo/studentInfo/exportExcel',params);
export const studentsDetails = params => get('/base/api/userInfo/studentInfo/getInfoById',params);
export const studentsParents = params => get('/base/api/userInfo/studentInfo/getParentInfoByUserId',params);
export const studentsUpdate = params => post('/base/api/userInfo/studentInfo/update',params);
//机构树
export const institutions = params => get('/base/api/organizationUnit/all',params);
export const insAdd = params => post('/base/api/organizationUnit/add',params);
export const insQin = params => get('/base/api/organizationUnit/get',params);
export const insEdit = params => post('/base/api/organizationUnit/update',params);
//查询学校下的校区
export const campusBySchool = params => get('/base/api/organizationUnit/schoolAreas',params);
//学届管理
export const learnSelect  = params => get('/base/api/grade/select',params);
//班级管理
export const classSelect  = params => get('/base/api/class/select',params);
//校历
export const calendarPage = params => post('/base/api/schoolCalendar/page',params);
export const calendarDis = params => post('/base/api/schoolCalendar/update/status',params);
export const calendarAdd = params => post('/base/api/schoolCalendar/add',params);
export const calendarEdit = params => post('/base/api/schoolCalendar/update',params);
export const calendarSelect = params => get('/base/api/schoolCalendar/select',params);
//作息时间
export const calendarTimePage = params => post('/base/api/workRest/page',params);
export const calendarTimeDis = params => post('/base/api/workRest/update/status',params);
export const calendarTimeById = params => get('/base/api/workRest/getById',params);
export const calendarTimeAdd = params => post('/base/api/workRest/add',params);
export const calendarTimeEdit = params => post('/base/api/workRest/update',params);
export const calendarTimeSetAdd = params => post('/base/api/workRestTime/add',params);
//学届
export const learn  = params => post('/base/api/grade/page',params);
export const learnAdd  = params => post('/base/api/grade/add',params);
export const learnEdit  = params => post('/base/api/grade/update',params);
export const learnDis  = params => post('/base/api/grade/update/status',params);
export const learSelect  = params => get('/base/api/grade/select',params);
//班级管理
export const claList  = params => post('/base/api/class/page',params);
export const claAdd  = params => post('/base/api/class/add',params);
export const claDis  = params => post('/base/api/class/update/status',params);
export const claEdit  = params => post('/base/api/class/update',params);
//教室管理
export const classroomSelect  = params => get('/base/api/classroom/select',params);

//测试接口
export const test = params => post('http://192.168.38.221:8081/test/getToken',params);




/**
 * 资源平台接口
 */


