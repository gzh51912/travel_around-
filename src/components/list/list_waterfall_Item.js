import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
@withRouter
class  List_Item extends Component {
    skip = (pid)=>{
        this.props.history.push('/detail',{pid})
        console.log(pid,'pid')
        console.log(this.props,"pppp")
    }
    render() {
        let { item } = this.props
        return (
            <div className="water clearfix">
                {
                    item.map((item,index)=>{
                        if(!item.pid) return
                        
                        return(
                            <div key={index} className="min_item" onClick={this.skip.bind(this,item.pid)}>
                                <img src={item.image} alt="" />
                                {
                                    item.placeLabel==undefined ? '' :<span className="city">{item.placeLabel}</span>
                                    
                                }
                                
                                <div className="item_box">
                                    <p className="name">{item.title}</p>
                                    
                                    {
                                        item.productCat ===undefined ? ' ' :
                                            <div className="type">
                                            {item.productCat}.{item.typetwoOrCat}.{item.days}
                                        </div>
                                    }
                                    {
                                        item.liangdian===undefined? '' : 
                                        <div className="tag">
                                            <span>{item.liangdian===undefined ?'' :item.liangdian[0]}</span>
                                            <span>{item.liangdian===undefined ?'' :item.liangdian[1]}</span>
                                        </div>
                                    }
                                    <div className="f_item_f">
                                        {
                                            item.priceLabel==undefined ? '' :
                                            <div className="price">￥{item.priceLabel}起</div>
                                        }
                                        
                                        <div className="enroll_num">{item.numLabel}</div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default  List_Item
