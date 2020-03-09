import { getCart, deleteCart, putCart } from '../../api/request'

export default {
    cart_getdata(){
        return async (dispatch)=>{
            let { data : { list }} = await getCart()
            dispatch({type:"CART-TO-STORE",payload:{list}})
        }
    },

    cart_removedata(pid){
        return async(dispatch)=>{
            let { data } = await deleteCart(pid)
            if(data.status==0){
                dispatch({type:"CART-TO-REMOVE",payload:{pid}})
            }
            
        }
    },

    cart_plus(pid,num){
        var Num = Number(num)
        Num++
        var max = String(Num)
        return async(dispatch)=>{
            console.log(Num,"reducer")
            let{ data : {status}}= await putCart(pid,max)
            if(status == 0){
                dispatch({type:"CART-TO-PLUS",payload:{pid,max}})
            }
        }
    },

    cart_reduce(pid,num){
        var Num = Number(num)
        Num--
        var max = String(Num)
        return async(dispatch)=>{
            let{ data : {status}}= await putCart(pid,max)
            if(status == 0){
                dispatch({type:"CART-TO-REDUCE",payload:{pid,max}})
            }
        }
    }
}