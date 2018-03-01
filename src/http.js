/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import router from './router/router'
import { setStore, getStore, removeStore } from './config/mUtils'
// axios 配置

// http request 拦截器
this.$http.interceptors.request.use(
    config => {

        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
this.$http.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    router.replace({
                        path: '/home',
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

export default axios;