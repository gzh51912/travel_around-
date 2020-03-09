import axois from 'axios'  

var  service = axois.create({
    baseURL:'/api',
    "content-type":"application/json",
    timeout:5000
})

// 请求拦截器
service.interceptors.request.use((config)=>{
    return  config
})

// 响应拦截器
service.interceptors.response.use((res)=>{
    return res
})

export default service 