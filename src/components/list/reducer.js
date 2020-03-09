var initialState = {
    
}
var reducer = (state = initialState,{type,payload})=>{
    switch(type){
        case 'LIST1-TO-LIST' :
            return {
                ...state,
                banner: payload.banner,
                nav: payload.nav,
                top:[ payload.topOutProduct, payload.topCNProduct],
                outdoor: payload.outdoor,
                tags: payload.tags,
                list:[...payload.data1,...payload.data2,...payload.data3,...payload.data4],
                list_max:[payload.data1,payload.data2,payload.data3,payload.data4,]
            }
        
        default :
            return state
    }
}

export default reducer