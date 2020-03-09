import React, { PureComponent } from 'react'
import { getDetail, postCart, getCart } from '../../api/request'
import './index.scss'
class Detail extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            list: [],
            status: false
        }
    }
    async componentDidMount(){
        let { location:{state:{pid}}  } = this.props
        let {data:{list}} = await getDetail(pid)
        this.setState({
            list: list
        })
        
    }
    // async componentDidUpdate(prevProps,prevState){
    //     let { location:{state:{pid}}  } = this.props
    //     let {data:{list}} = await getDetail(pid)
     
    //     // this.setState({
    //     //     list: list
    //     // })
    //     //console.log(list,prevState.list)
    //     if(list!==prevState.list){

    //         /* this.setState({
    //             list: list
    //         }) */
    //     }else{

    //     }
       
    // }
    collect = ()=>{
        this.setState({
            status: !this.state.status
        })
    }
    goback = ()=>{
        this.props.history.goBack()
    }
    add = async ()=>{
        
        let {pid, title, priceLabel, days, productType ,placeLabel,num='1'} = this.state.list[0]
        
        console.log(pid, title, priceLabel, days, productType ,placeLabel,num='1')
        let data = await postCart(pid, title, priceLabel, days, productType ,placeLabel,num)
       
    }
    render() {
        let { list } = this.state
        console.log(this.props)
        return (
            <>
                {
                    list.length>0 ? 
                    list.map(item=>{
                        return(
                            <div key={item.pid} className="detail">
                                <div className="detail_top">
                                    <div className="detail_top_banner">
                                        <img src={item.image} alt="" />
                                    </div>
                                <div className="detail_top_nav">
                                    <div className="d_t_back" onClick={this.goback} ></div>
                                    <div className="d_t_name"></div>
                                </div>
                                </div>
                                <div className="detail_price__box">
                                    <span><em>￥</em><b>{item.priceLabel}</b><i>起/成人</i></span>
                                    <span><em>￥</em><b>{item.priceLabel*0.8}</b><i>起/儿童</i></span>
                                    <a>送41.8游侠币</a>
                                </div>
                                <div className="mLine__title">
                                    <div className="title__pname">
                                        {
                                            item.tagList.length!==0 ? <span>{item.tagList}</span>:<span>最佳</span>
                                        }
                                        {item.title}
                                    </div>
                                    <div className="title__sname">
                                     2人成行适合初学者到中高级玩家：玩雪乐园+滑雪学校（中文服务）+单板乐园，机场巴士接送
                                    </div>
                                    <div className="title__liangdian">
                                        {
                                            item.liangdian==undefined?'':
                                            item.liangdian.slice(0,3).map((ele,index)=>{
                                                return(
                                                    <span key={index + 'liangdian'}>{ele}</span>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="mLine__location">
                                    <em></em>
                                    <span>出发地: {item.placeLabel}</span>
                                    <i>{item.numLabel}</i>
                                </div>
                                
                            </div>
                        )
                    }):<>1</>
                }

                <div className="mLineBuy">
                    <div className="line__bottom__service">
                        <img src={require('../../img/detail_service.png')} alt="" />
                        <p>联系客服</p>
                    </div>
                    <div className="line__bottom__favorite" onClick={this.collect}>
                        <div style={{display:this.state.status?'none':''}}>
                            <img src={require('../../img/detail_collect.png')} alt="" />
                            <p>收藏</p>
                        </div>
                        <div style={{display:!this.state.status?'none':''}}>
                            <img src={require('../../img/detail_collect1.png')} alt="" />
                            <p>已收藏</p>
                        </div>
                    </div>
                    <div className="line__bottom__btn" onClick = {this.add}>加入购物车</div>
                </div>
                
            </>
        )
    }
}


export default Detail