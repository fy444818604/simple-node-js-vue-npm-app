import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        //存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        //菜单设置
        menuConfig: {
            menuBodyColor: window.localStorage.menuBodyColor ? window.localStorage.menuBodyColor : '#222c31',
            menuBottomColor: '#2e373b'
        },
        //右侧边栏设置
        offsideConfig: {
            offsideShow: window.localStorage.offsideShow ? window.localStorage.offsideShow : true,
            memoShow: window.localStorage.memoShow ? window.localStorage.memoShow : true,
            bookmarkShow: window.localStorage.bookmarkShow ? window.localStorage.bookmarkShow : true,
            offsideFold: window.localStorage.offsideFold ? window.localStorage.offsideFold : true
        },
        //头部设置
        headConfig:{
            back:"#4a80f6",
            back1:"red"
        }
    },

    mutations: {
        //修改token，并将token存入localStorage
        changeLogin(state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        },
        //清除token
        clearLogin(state) {
            localStorage.removeItem('Authorization');
            state.Authorization = '';
        },
        //侧边栏配置
        changeOffside(state, user) {
            state.offsideConfig.offsideShow = user.offsideShow;
            state.offsideConfig.memoShow = user.memoShow;
            state.offsideConfig.bookmarkShow = user.bookmarkShow;
            state.offsideConfig.offsideFold = user.offsideShow;
            localStorage.setItem('offsideShow', user.offsideShow);
            localStorage.setItem('memoShow', user.memoShow);
            localStorage.setItem('bookmarkShow', user.bookmarkShow);
            localStorage.setItem('offsideFold', user.offsideShow);
        },
        //头部配置
        changeHead(state, user){
            if(user.linear){
				
            }else{
				
            }
        }
    }
});

export default store;
