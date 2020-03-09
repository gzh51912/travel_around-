import React, { Component } from 'react'
import { connect } from 'react-redux'
import Popular_Item from './list_popular_Item'
var mapStateToProps = (state)=>state
@connect(mapStateToProps)
class List_Popular extends Component {
   constructor(props){
       super(props)
       this.state = {
        list_cur : 1
     }
   }
   list_hit = (id)=>{
       console.log(id)  //state => ({ msg: "hello world" })
       this.setState(state => ({list_cur:id}))
   }
    render() {
        let { list : { top:data } } = this.props
        return (
            <div className="list_popular">
                <div className="popular__top">
                    <div className="title_box">
                    {
                        data!== undefined ?
                        data.map((item,index)=>{
                            return(
                                <p 
                                key={item.title} 
                                className= {this.state.list_cur === index ? "curtive" : ''}
                                onClick={this.list_hit.bind(this,index)}>{item.title}</p>
                            )
                        }):<></>
                    }
                    </div>
                </div>
                <div className="Popular">
                    {
                        data !== undefined ?
                        data.map((item,idx)=>{
                            return(
                                <div key={idx + 'Popular'} style={{display:this.state.list_cur === idx ? '':'none'}} >
                                    <Popular_Item item={item.topProduct} />
                                </div>
                            )
                        }): <></>
                    }
                </div>
            </div>
        )
    }
}

export default  List_Popular
