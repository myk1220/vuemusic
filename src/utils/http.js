import axios from "axios"
import qs from "querystring"
import router from "../router"

// 跳转登陆页面
const toLogin = () => {
    router.push({
        path: '/login'
    })
}

// 错误信息处理

const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            console.log("信息校验失败");
            break;
        case 401:
            // 去登陆
            toLogin();
            console.log("认证失败");
            break;
        case 403:
            toLogin();
            // token过时了
            // 清除token存储
            localStorage.removeItem("token");
            console.log("token校验失败");
            break;
        case 404:
            console.log("请求的资源不存在");
            break;
        default:
            console.log(other);
            break;
    }
}


// 创建axios实例
var instance = axios.create({ timeout: 10000 });
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.common['Authorization'] = localStorage.getItem("token"); // token在vuex

instance.interceptors.request.use(function (config) {
    // 判断post请求需要增加qs转化
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    // if(token){
    //     config.headers.Authorization = token;
    // }
    return config;
}, function (error) {
    return Promise.reject(error);
})

instance.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            console.log("断网了");
        }
    }
);

export default instance