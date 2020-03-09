import React, { Component } from 'react'
import { connect } from 'react-redux'
var mapStateToProps = state => state 
@connect(mapStateToProps)
class List_Musthave extends Component {
    render() {
        let { list : { outdoor } } = this.props
        return (
            <div className="list_musthave">
                <div className="musthave_title">出行必备</div>
                <div className="list">
                    {
                        outdoor!==undefined ?
                        outdoor.map(item=>{
                            return(
                                <a key={item.title}>
                                    <p>{item.title}</p>
                                    <span>{item.subTitle}</span>
                                </a>
                            )
                        }) : <></>
                    }
                </div>
            </div>
        )
    }
}

export default  List_Musthave
