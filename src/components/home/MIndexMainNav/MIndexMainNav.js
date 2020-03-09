import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
@withRouter
class MIndexMainNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            nMIndexMainNav: [
                {
                    text:"周边游",
                    src:"mIndexMainNav_a.png"
                },
                {
                    text:"国内游",
                    src:"mIndexMainNav_b.png"
                },
                {
                    text:"出境游",
                    src:"mIndexMainNav_c.png"
                },
                {
                    text:"自由行",
                    src:"mIndexMainNav_d.png"
                },
                {
                    text:"酒店民宿",
                    src:"mIndexMainNav_e.png"
                }
            ]
        }
    }
    goto_list= ()=>{
        this.props.history.push('/list')
    }
    render() {
        let {nMIndexMainNav}  = this.state
        return (
            <div className="mIndexMainNav">
                {
                    nMIndexMainNav.map(item=>{
                        return(
                            <a href="#" key={item.text} onClick={this.goto_list}>
                                <img src={require('../../../img/'+item.src)} alt="" />
                                <span>{item.text}</span>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default  MIndexMainNav
