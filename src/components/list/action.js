import { getList1, getList2 } from '../../api/request'


export default {

    List_Top(){
        return async (dispatch)=>{
            let { data:{list} }= await getList1()
            let{ data :{list:listmin} } = await getList2()
            let { banner, nav, topOutProduct, topCNProduct, outdoor, tags} = list[0]
            let { list1, list2, list3, list4 } = listmin[0]
            
            function tool(Array){
                let data = [] 
                Array.map(ele=>{
                if(ele.dataDetail){
                        data.push(ele.dataDetail)
                    }
                })
                return data
            }
            let data1 = tool(list1)
            let data2 = tool(list2)
            let data3 = tool(list3)
            let data4 = tool(list4)
            
            dispatch({type:'LIST1-TO-LIST',payload:{banner, nav, topOutProduct, topCNProduct, outdoor, tags,data1, data2, data3, data4}})
        }
    }
}