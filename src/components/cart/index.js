import React, { Component } from 'react'
import { connect } from 'react-redux'
import cart_action from './cart_action'
import './index.scss'
var mapStateToProps = (state)=>state 
@connect(mapStateToProps,cart_action) 
class Cart extends Component {
    componentDidMount(){
        this.props.cart_getdata()
    }
    cart_mine = ()=>{
        this.props.history.push('/mine')
    }
    render() {
        let { cart :{ cartlist } , cart_removedata, cart_plus, cart_reduce } = this.props
        console.log(this.props,"render")
       
        return (
            <div className="cart">
                <div className="cart_top">
                    <div className="c_t_back" onClick={this.cart_mine}></div>
                    <div className="c_t_title">购物车</div>
                    <div className="c_t_user" onClick={this.cart_mine}></div>
                </div>
                <div className="cart_list">
                    {   
                        cartlist.map(item=>{
                            return(
                                <div key={item.pid} className="cart_list_item">
                                    <div className="c_i_select">
                                        <div className="select"></div>
                                    </div>
                                    <div className="item_container">
                                        <div className="item_nsme">{item.title}</div>
                                        <div className="today">
                                            {item.productType}*{item.placeLabel}*{item.days}
                                        </div>
                                        <div className="item_box">
                                            <div className="price">￥{item.priceLabel}</div>
                                            <div className="list_button">
                                                <div className="reduce button_item" onClick={cart_reduce.bind(this,item.pid,item.num)}>-</div>
                                                <div className="count button_item">{item.num}</div>
                                                <div className="plus button_item" onClick={cart_plus.bind(this,item.pid,item.num)}>+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c_i_remove">
                                        <div className="remove" onClick={cart_removedata.bind(this,item.pid)}>X</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                
                
                </div>
            </div>
        )
    }
}

export default  Cart
