// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import Mint from 'mint-ui'
import axios from 'axios'
import store from './store/'
import './style/font/iconfont.css'
import 'mint-ui/lib/style.css'
import './config/rem'
import './style/base.css'
import './style/reset.css'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'
import { cookies, getStore, setStore } from './config/mUtils'
import VuePreview from 'vue-preview'

Vue.use(Mint);
Vue.use(VuePreview);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common["Authorization"] = '';
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    if (!window.navigator.onLine) {
        alert('亲，网络断了哦，请检查网络设置...');
        retutn;
    }
    return res;
}, (error) => {
    if (error.response.status == 401) {
        // alert('登录状态丢失，正在重新登录...');
        location.href = '/author';
    }
    if (!window.navigator.onLine) {
        alert('亲，网络断了哦，请检查网络设置...');
        retutn;
    }
    return Promise.reject(error);
});


Vue.prototype.$http = axios
Vue.use(VueLazyload, {
    loading: require('../src/assets/home/yqq.png')
})
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'history',
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
    },

})
router.beforeEach((to, from, next) => {
    if (to.path == '/author' && !!cookies.get('YQQParty') && !!getStore('userInfo')) {
        // 用户使用后退返回到授权页，则默认回到首页
        next('/');
        return false;
    }
    if ((!cookies.get('YQQParty') || !getStore('userInfo')) && to.path != '/author') {
        // 第一次进入项目
        setStore('beforeLoginUrl', to.fullPath); // 保存用户进入的url
        next('/author');
        return false;
    }
    //console.info(store.state.userInfo);
    // if (!store.state.userInfo && to.path != '/author') {
    //     setStore('beforeLoginUrl', to.fullPath) // 保存用户进入的url
    //     next('/author')
    //     return false
    // }
    window.document.title = to.meta.title;
    next()
})




new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})