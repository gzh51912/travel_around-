import React, { Component } from 'react'
import classNames from 'classnames'
import './order.scss'
export default class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : [
                {
                    id: '01' ,
                    text: '全部'
                },
                {
                    id: '02 ',
                    text: '代付款'
                },
                {
                    id:' 03' ,
                    text: '报名成功'
                },
                {
                    id: '04' ,
                    text: '替补'
                },
                {
                    id: '05' ,
                    text: '待评价'
                }
            ],
            order_index: 0
        }
    }
    order_toggle = (index)=>{
        
        this.setState({
            order_active:index
        },()=>{
            console.log(this.state.order_active,"active")
        })
    }
    render() {
        let { title, order_index } = this.state
        return (
            <div className="order">
                <div className="order_top">
                    <div className="top_back"></div>
                    <div className="top_title">出行订单</div>
                </div>

                <div className="order-nav">
                    {
                        title.map((ele,index)=>{
                            
                            return (
                                <p 
                                key={ele.id} 
                                className={classNames({'order_active':order_index===index})}
                                onClick={this.order_toggle.bind(this,index)} >
                                    <span>{ele.text}</span>
                                    <i className={classNames({'order_symbol':order_index===index})}  ></i>
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
