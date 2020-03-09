import React, { Component } from 'react'
import Dest_Item from './Dest_Item'
export default class MIndexDest extends Component {
    constructor(props){
        super(props)
        this.state={
            curIndex : 0
        }

    }
    DestItem = (id)=>{
        this.setState({
            curIndex : id
        })
    }
    render() {
        let { tabList  } = this.props
        return (
            <div className="mIndexDest">
                <div className="mIndexDest__head">
                    <p className="head__title">当季目的地</p> 
                    <p className="head__desc">你朋友圈的旅行内容，我们包了</p> 
                    <a href="#" className="head__more">更多</a>
                </div>
                <div className="mIndexDest__content">
                    <ul className="content__nav">
                        {
                            tabList!==undefined?
                            tabList.map((item,index)=>{
                                return(
                                    <li 
                                    key={item.selected}
                                    style={{
                                        color:index===this.state.curIndex?'#e6ac00':'',
                                        fontWeight:index===this.state.curIndex?'700':''
                                    }} 
                                    onClick={this.DestItem.bind(this,index)}
                                    >{item.tabName}</li>
                                )
                            }):<></>
                        }
                    </ul>
                    {
                        tabList!==undefined?
                        tabList.map((item,index)=>{
                            return (
                                <div key={item.tabName} style={{display:index===this.state.curIndex?'':'none'}}>
                                <Dest_Item 
                                data={item.data}
                                />
                                </div>
                            )
                        }):<></>
                    }
                </div>
            </div>
        )
    }
}
