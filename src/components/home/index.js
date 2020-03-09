import React, { Component } from 'react'
import { getHome } from '../../api/request'
import './home.scss'
import MIndexBanner from './MIndexBanner/mIndexBanner'
import MIndexMainNav from './MIndexMainNav/MIndexMainNav'
import MIndexSecondNav from './MIndexSecondNav/MIndexSecondNav'
import MIndexWeekAndLocal from './MIndexWeekAndLocal'
import MIndexMuster from './MIndexMuster/MIndexMuster'
import MIndexMinority from './MIndexMinority/MIndexMinority'
import MIndexDest from './MIndexDest/MIndexDest'


import Text from '../test/index'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            hotSearchList : [] , // 热搜  1
            flashImageList : [] , // 五一去哪里  1
            activityBanner : [] , // 小地赏春的 1
            saleProductList : [] , // 架云线 1
            newProduct : [] , // 新品推荐 1
            kingProduct : [] , // 王牌线路 1
            minority : [] , // 小众种草  1
            destination : [] , // 国内外
            flowTabList : [] , // 
            aroundLump : [] , // 当地游 周边游 1
        }
    }
    async componentDidMount(){
        let {data:{list},status} =await getHome()
        let {hotSearchList, flashImageList, activityBanner, saleProductList, newProduct, kingProduct, minority, destination, flowTabList, aroundLump } = list[0]
       this.setState({
        hotSearchList ,
        flashImageList ,
        activityBanner ,
        saleProductList ,
        newProduct ,
        kingProduct ,
        minority ,
        destination ,
        flowTabList ,
        aroundLump ,
       })
    //    console.log(hotSearchList, flashImageList, activityBanner, saleProductList, newProduct, kingProduct, minority, destination, flowTabList, aroundLump )
    }
    render() {
        let { hotSearchList, flashImageList, activityBanner, saleProductList, newProduct, kingProduct, minority, destination, flowTabList, aroundLump } = this.state 
       
        return (
            <div className="home">
                <MIndexBanner 
                    hometop={hotSearchList} 
                    banner={flashImageList}  />
                <MIndexMainNav />
                <MIndexSecondNav />
                <MIndexWeekAndLocal 
                    aroundLump={aroundLump} />
                <MIndexMuster 
                    saleProductList={saleProductList} 
                    newProduct={newProduct} 
                    kingProduct={kingProduct} 
                    activityBanner={activityBanner} />
                <MIndexMinority 
                    minority={minority} />
                <MIndexDest 
                    {...destination} />
                
               
            </div>
        )
    }
}
