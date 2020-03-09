
import Home from '../components/home'
import Order from '../components/order'
import Mine from '../components/mine'
import List from '../components/list'
import Login from '../components/login'
import Reg from '../components/register'
import Detail from '../components/detail'
import Cart from '../components/cart'
export const routing = [
    {
        text:"首页",
        path:"/home",
        src1:"home.png",
        src2:"home1.png",
        status:true,
        components:Home
    },
    {
        text:"订单",
        path:"/order",
        src1:"order.png",
        src2:"order1.png",
        status:true,
        components:Order
    },
    {
        text:"个人中心",
        path:"/mine",
        src1:"mine.png",
        src2:"mine1.png",
        status:true,
        components:Mine
    },
    {
        text:"列表页",
        path:"/list",
        status:false,
        components:List
    },
    {
        text:"详情页",
        path:"/detail",
        status:false,
        components:Detail
    },
    {
        text:"购物车",
        path:"/cart",
        status:false,
        components:Cart
    },
    {
        text:"登录",
        path:"/login",
        status:false,
        components:Login
    },
    {
        text:"注册",
        path:"/reg",
        status:false,
        components:Reg
    }
]