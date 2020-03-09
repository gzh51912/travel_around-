import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import Item from 'antd-mobile/lib/popover/Item';
export default class IndexMuster__top extends Component {
    render() {
        let { saleProductList:data, newProduct, kingProduct } = this.props
        let { title,recommendList } = newProduct
        let { title:name,recommendList:recommend } = kingProduct
        return (
            <div className="mIndexMuster__top clearfix">
                <div className="mIndexMuster__timelimit">
                <Carousel
                    autoplay={true}
                    autoplayInterval={1000}
                    infinite
                    swipeSpeed={2}
                    style={{touchAction: 'none'}}
                >
                    {data.map(val => (
                      <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%' }}
                      >  
                        <p style={{display:'block',height:'32px',fontSize:'26px',color:'#fff',marginBottom:'10px'}}>{val.title}</p>
                        <img
                          src={val.image}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top' }}
                        />

                        <p className="productName" >{val.productName}</p>
                        <div className="muster_price"><span>￥{val.priceLabel}起</span><del>￥{val.priceOtherLabel}</del></div>
                      </a>
                      
                    ))}
                    
                </Carousel>
                </div>
                <div className="mIndexMuster_recommendAndKing">
                        {
                            recommendList !== undefined ?
                            recommendList.slice(0,1).map((item,index)=>{
                                    return(
                                        <a href="#" key={index}>
                                            <p className="heade">{title}</p>
                                            <div className="content">
                                                <p>{item.title}</p>
                                                <span>{item.subTitle}</span>
                                            </div>
                                        </a>
                                    )
                                }):<div>111</div>
                        }
                        
                        {
                            recommend !== undefined ?
                            recommend.slice(0,1).map((item,index)=>{
                                    return(
                                        <a href="#" key={index}>
                                            <p className="heade">{name}</p>
                                            <div className="content">
                                                <p>{item.title}</p>
                                                <span>{item.subTitle}</span>
                                            </div>
                                        </a>
                                    )
                                }):<div>111</div>
                        }
                </div>
            </div>
        )
    }
}
