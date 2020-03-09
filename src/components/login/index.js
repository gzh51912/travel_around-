import React, { Component } from 'react'
import { login } from '../../api/request'
import './index.scss'
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    componentDidMount(){
        this.username()
    }
    login = async()=>{
        if(!this.elephone.value || !this.password.value) return
        
        let { data : { data }} = await login(this.elephone.value,this.password.value)  
        if(data.login){
            sessionStorage.setItem('token',data.token)
            sessionStorage.setItem('username',this.elephone.value)
            this.props.history.push('/mine')
            
        }
        
    }
    login_reg = ()=>{
        this.props.history.push('/reg')
    }
    username = ()=>{
        if(this.props.location.state!==undefined){
            this.elephone.value = this.props.location.state.name 
        }
        
    }
    render() {
        return (
            <div className="login">
                <div className="login_top">
                    <div className="top">
                        <i></i>
                        <span>账号密码登录</span>
                    </div>
                    <div className="login-username matter">
                        <input type="text" onChange={this.username}  placeholder="请输入手机号码/邮箱" ref={(elephone)=>this.elephone=elephone}  />
                    </div>
                    <div className="login-password matter">
                        <input type="text" placeholder="请输入密码" ref={( password)=>this. password= password}  />
                    </div>
                    <div className="stroke" onClick={this.login}>
                        登录
                    </div>
                    <div className="changeLoginWay">
                        <p>忘记密码</p>
                        <span onClick={this.login_reg}>前往注册</span>
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
