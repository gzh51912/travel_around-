import React, { Component } from 'react'
import { Route,Redirect,withRouter } from 'react-router-dom'
class MyRouter extends Component {
    render() {
        let { path, component:Target } = this.props
        let thought = sessionStorage.getItem('username')
        // let min = this.props.location.pathname
        console.log(this.props)
        return (
            <Route path={path} render={(props)=>{
                return thought!=null?<Target {...props}></Target>:<div>11></div>
            }}></Route>
        )
    }
}

export default withRouter(MyRouter) 
