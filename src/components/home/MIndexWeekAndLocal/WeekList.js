import React, { Component } from 'react'

export default class WeekList extends Component {
    constructor(props){
        super(props)
        this.state = {
            condition : 0
        }
    }
    hit = (index)=>{
        this.setState({
            condition:index
        })
    }
    render() {
        let { weekList } = this.props
        let {condition} = this.state
       
        if(weekList !== undefined ){
            return (
                <div className="mIndexWeekAndLocal__week_nav">
                    <ul className="week__nav">
                        {
                            weekList.slice(0,3).map((item,index)=>{
                                return (
                                    <li key={item.title} style={{color:index===condition?'#e6ac00':''}} onClick={this.hit.bind(this,index)}>{item.title}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="vux-slider ">
                        {
                            weekList.slice(0,3).map((item,index)=>{
                                return (
                                    <div key={item.title + 'div'} className="vux-slider-item clearfix" style={{display:index===condition?'':'none'}}>
                                        {
                                            item.productList.slice(0,6).map((item,idx)=>{
                                                return(
                                                    <a href="#" key={item.productName}>
                                                        <img src={item.image} alt="" />
                                                        <p className="tag"><span className="addr">{item.placeLabel}</span>|<span className="time">{item.days}</span></p>
                                                        <p className="price">￥{item.priceLabel}起</p>
                                                        <p className="title">{item.simpleName}</p>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
        return <></>
    }
}
