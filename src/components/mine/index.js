import React, { Component } from 'react'
import { quit } from '../../api/request'
import './index.scss'
export default class Mine extends Component {
    constructor(props){
        super(props)
        this.state = {
            mine_order: [
                {
                    text:'代付款',
                    src: "mine_order_a.png"
                },
                {
                    text:'成功报名',
                    src: "mine_order_b.png"
                },
                {
                    text:'提付',
                    src: "mine_order_c.png"
                },
                {
                    text:'带评价',
                    src: "mine_order_d.png"
                },
                {
                    text:'退款',
                    src: "mine_order_e.png"
                }
            ],
            mine_server: [
                {
                    text:"签证订单",
                    src: "mine_server_1.png"
                },
                {
                    text:"签集市订单",
                    src: "mine_server_2.png"
                },
                {
                    text:"集市购物车",
                    src: "mine_server_3.png"
                },
                {
                    text:"常用收货地址",
                    src: "mine_server_4.png"
                },
                {
                    text:"常用出行人",
                    src: "mine_server_5.png"
                },
                {
                    text:"修改密码",
                    src: "mine_server_6.png"
                },
                {
                    text:"在线客服",
                    src: "mine_server_7.png"
                },
                {
                    text:"游侠客App",
                    src: "mine_server_8.png"
                }
            ],

        }
    }
    mine_login = ()=>{
        this.props.history.push('/login')
    }
    logout = async() =>{
        let { data : {status}  }= await quit()
        if(status == 0 ) {
            sessionStorage.removeItem('username')
            sessionStorage.removeItem('token')
            this.props.history.push('/login')
        }
        
       
    }
    mine_cart = ()=>{
        this.props.history.push('/cart')
    }
    render() {
        let { mine_order,  mine_server } = this.state
        return (
            <div className="mine">
                <div className="mine_top">
                    <div className="mine_box_box">
                        <div className="top_avatar"></div>
                        {
                            sessionStorage.getItem('username') !== null ?
                            <div className="top_login">
                            欢迎{sessionStorage.getItem('username').slice(0,5)+'...'}
                                <span onClick={this.logout}>退出</span>
                            </div> : 
                            <div className="top_login" onClick={this.mine_login}>
                                去登录/注册
                            <span>新用户注册送388元大礼包</span>
                            </div>
                        }
                        {/* <div className="top_login" onClick={this.mine_login}>
                            去登录/注册
                            <span>新用户注册送388元大礼包</span>
                        </div> */}

                    </div>
                </div>

                <div className="mine_order">
                    <div className="order_title">
                        <b>出行订单</b>
                        <span>全部</span>
                    </div>
                    <div className="order_container">
                        {
                            mine_order.map(item=>{
                                return(
                                    <a href="#" key={item.text} >
                                        <img src={require('../../img/'+item.src)} alt="" />
                                        <span>{item.text}</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="mime_wallet">
                    我的钱包
                    <i></i>
                </div>

                <div className="mine_server">
                    <div className="server_title">
                        <b>我的服务</b>
                    </div>
                    <div className="server_container clearfix">
                        {
                            mine_server.map(item=>{
                                return(
                                    <a href="#" key={item.src}  onClick = {this.mine_cart} >
                                        <img src={require('../../img/'+item.src)} alt="" />
                                        <span>{item.text}</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}
