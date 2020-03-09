import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import { Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom'
import {routing} from './router'
import './App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      AppHeight: ''
    }
  }
  componentDidMount(){
      this.setState({
        AppHeight: this.node.offsetHeight
      })
      
  }
  componentWillUpdate(){
    this.confine()
  }
  confine = ()=>{
    let target = ['/login','/reg','/list','/detail','/cart']
    let { pathname } = this.props.location
    
    return target.every(item=>item!==pathname)
  }
  render() {
    let { pathname } = this.props.location
    return (
          <div className="App">
              <Scrollbars style={{ width: window.innerWidth, height: window.innerHeight-this.state.AppHeight }}>
                  <Switch>
                    {
                        routing.map(item=>{
                            return(
                                <Route key={item.path} path={item.path} component={item.components}>  
                                </Route>
                            )
                        })
                    }
                    <Redirect from='/' to='/home'></Redirect>
                    </Switch>

                    <div 
                    className="navigator" 
                    style={{ display:this.confine() ? "block":"none" ,
                    }}
                    ref={(node)=>this.node=node}
                    >
                    {   
                        routing.map(item=>{
                            if(item.status){
                              return(
                                <NavLink key={item.path} to={item.path} style={{display:item.status?'':'none'}}  className="active">
                                  <p>
                                  <img src={require('./img/'+item.src1)} alt="" style={{display:pathname===item.path?'none':''}} />
                                  <img src={require('./img/'+item.src2)} alt="" style={{display:pathname===item.path?'':'none'}} />
                                  </p>
                                  
                                  <span>{item.text}</span>
                                </NavLink>
                              )
                            }
                        })
                    }
                    
                    </div> 
        
                    </Scrollbars>
            </div>
    )     
  }
}

export default withRouter(App);
