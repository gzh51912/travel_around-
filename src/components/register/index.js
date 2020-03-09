import React, { Component } from 'react'
import { reg } from '../../api/request'
import './index.scss'
export default class Login extends Component {
    reg_login = () =>{
        this.props.history.push('./login')
    }
    reg = async ()=>{
        if(!this.emeil.value || !this.psw.value) return
        let {data} = await reg(this.emeil.value,this.psw.value)
        console.log(data.status == 0,"]]]")
        if(data.status == 0){ 
            console.log('jinlia')
            this.props.history.push('/login',{name:this.emeil.value})
        }
        
    }
    render() {
        return (
            <div className="login">
                <div className="login_top">
                    <div className="top">
                        <i></i>
                        <span>注册中心</span>
                    </div>
                    <div className="login-username matter">
                        <input type="text" placeholder="请输入手机号码/邮箱" ref={(emeil)=>this.emeil=emeil}  />
                    </div>
                    <div className="login-password matter">
                        <input type="text" placeholder="请输入密码" ref={(psw)=>this.psw=psw}  />
                    </div>
                    <div className="stroke" onClick = {this.reg}>
                        注册
                    </div>
                    <div className="changeLoginWay">
                        <p>忘记密码</p>
                        <span onClick={this.reg_login}>前往登录</span>
                    </div>
                </div>

                <div className="login_bottom">
                    <div className="bottomBefore">
                        <img src={require('../../img/weixin.png')} alt="" />
                        <img src={require('../../img/qq.png')} alt="" />
                    </div>
                    <div className="NewContent__bottom"></div>
                </div>
            </div>
        )
    }
}
