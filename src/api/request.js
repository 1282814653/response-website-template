import axios from 'axios'
import qs from 'qs'
import router from '@/router'
import { Message } from 'element-ui'
import store from '@/store'

// import { Message } from 'element-ui';
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const service = axios.create({
    // 请求 地址
    baseURL: process.env.VUE_APP_BASE_API,
    // 请求头 
    headers: { 'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8" },
    // 请求时间
    timeout: 5000,
    // withCredentials: true,
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    return config;
}, (error) => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.tokenCode == 5000) {
        Message({
            message: "错误",
            type: "error",
            duration: 5 * 1000
        })
        router.push("/login");
        return Promise.reject()
    }
    return res;
}, (error) => {
    // 对响应错误做点什么
    console.log("err" + error)
    Message({
        message: error.message,
        type: "error",
        duration: 5 * 1000
    })
    return Promise.reject(error);
});

function http(config) {
    if (config.method.toLowerCase() === 'post') {

        config.data = qs.stringify(config.data, {
            arrayFormat: "repeat",
            allowDots: true,
        });
        // config.data = JSON.stringify(config.data)
    } else {
        config.params = config.data
        config.data = null
    }
    return service(config)
}

export default http