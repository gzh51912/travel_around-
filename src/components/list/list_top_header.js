import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
@withRouter
class List_Top_Header extends Component {
    goback = ()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="list_top_header">
                <div className="top_back" onClick={this.goback}></div>
                <div className="top_title">自由行</div>
                <div className="username"></div>
            </div>
        )
    }
}

export default  List_Top_Header