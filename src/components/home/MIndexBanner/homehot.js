import React, { Component } from 'react'

export default class Homehot extends Component {
    render() {
        let {homehot} = this.props
        
        return (
            <div className="homehot">
                <p>热搜</p>
                <div className="hot_list">
                {
                    homehot.map(item=>{
                        return (
                            <a key={item.title}>
                                <span>{item.title}</span>
                            </a>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
