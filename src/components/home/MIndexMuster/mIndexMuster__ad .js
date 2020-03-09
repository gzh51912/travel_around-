import React, { Component } from 'react'

export default class MIndexMuster__ad  extends Component {
    render() {
        let { activityBanner } = this.props
        return (
            <div className="mIndexMuster__ad clearfix">
                {
                    activityBanner!==undefined ?
                    activityBanner.map(item=>{
                        return(
                            <a href="#" key={item.url} className="clearfix">
                                <img src={item.image} alt="" />
                                <p className="title" >{item.title}</p>
                                <p className="desc" >{item.subTitle}</p>
                            </a>
                        )
                    }):<></>
                }
            </div>
        )
    }
}
