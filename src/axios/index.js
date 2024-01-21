import axios from 'axios'
import CryptoJS from 'crypto-js'
import qs from "qs"
import {
    getToken
} from '@/axios/auth'

// 创建一个新的axios实例
const instance = axios.create({
    baseURL:"http://www.tfydd.com/api",
    timeout:5000,
    headers:{}
})

// generateReqKey：用于根据当前请求的信息，生成请求 Key；
function generateReqKey(config) {
    const {method, url, data, params} = config;
    return [method, url, qs.stringify(data), qs.stringify(params)].join('&');
}

// addPendingRequest：用于把当前请求信息添加到 pendingRequest 对象中；
const penddingRequest = new Map();

function addPendingRequest(config) {
    const requestKey = generateReqKey(config);
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
        if (!penddingRequest.has(requestKey)) {
            penddingRequest.set(requestKey, cancel);
        }
    });
}

// removePendingRequest：检查是否存在重复请求，若存在则取消已发的请求。
function removePendingRequest(config) {
    const requestKey = generateReqKey(config);
    if (penddingRequest.has(requestKey)) {
        const cancelToken = penddingRequest.get(requestKey);
        cancelToken(requestKey);
        penddingRequest.delete(requestKey);
    }
}

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    removePendingRequest(config); // 检查是否存在重复请求，若存在则取消已发的请求
    addPendingRequest(config); // 把当前请求信息添加到pendingRequest对象中
    let token=getToken();
    if (token) {
        config.headers['token'] = getToken()
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
    // 对响应数据做些什么
    removePendingRequest(response.config); // 请求成功，移除该请求
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // if (response.data.code !== 200) {
    //     console.log(232323232)
    //     return Promise.reject(response.data.message);
    // }
    return response;
}, error => {
    // 对响应错误做些什么
    return Promise.reject(error);
});

export default instance;