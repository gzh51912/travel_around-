import axios from './index'

// 首页获取数据
export const getHome = (page,pagesize)=>{
    return axios.get('/home1',{params:{page,pagesize}})
}

 // 列表页获取数据1
export const getList1 = ()=>{
    return axios.get('/list1')
}

 // 列表页获取数据2
export const getList2= ()=>{
    return axios.get('/list2')
}


// 详情页获取数据
export const getDetail= (pid)=>{
    return axios.get('/detail',{params:{pid}})
}

// 注册页面
export const reg = (username,password) =>{
    return axios.post("/users/reg",{username,password})
}

// 登录接口
export const login = (username,password)=>{
    return axios.post("/users/login",{username,password})
} 

// 退出
export const quit = ()=>{
    return axios.post("/users/quit")
} 


// 获取购物车列表的信息
export const getCart = ()=>{
    return axios.get('/cart')
}

// 删除商品

export const deleteCart = (pid)=>{
    return axios.delete('/cart',{params:{pid}})
}

// 更新数量
export const putCart = (pid,num)=>{
    
    return axios.put('/cart',{pid,num})
}


//添加
export const postCart = (pid, title, priceLabel, days, productType ,placeLabel,num) =>{
    return axios.post('/cart',{pid, title, priceLabel, days, productType ,placeLabel,num})
}

