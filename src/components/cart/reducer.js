var initialState = {
    cartlist:[]
}

var reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case 'CART-TO-STORE' :
            return {
                ...state,
                cartlist:payload.list
            }
        case 'CART-TO-REMOVE' :
            return{
                ...state,
                cartlist: state.cartlist.filter(item=>item.pid!=payload.pid)
            }
        case 'CART-TO-PLUS' :
            return{
                ...state,
                cartlist: state.cartlist.map(item=>{
                    if(item.pid==payload.pid){
                        item.num = payload.max
                    }
                    return item
                })
            }
        case 'CART-TO-REDUCE' : 
            return{
                ...state,
                cartlist: state.cartlist.map(item=>{
                    if(item.pid==payload.pid){
                        item.num = payload.max
                    }
                    return item
                })
            }
        default :
            return state
    }
}

export default reducer