import React, { Component } from 'react'

class Local extends Component {
    render() {
        let { upList, downList } = this.props
        
        if(upList !== undefined && downList !== undefined){
            return (
                <div className="local_box">
                   <div className="local_top clearfix">
                       {
                           
                           upList.map(item=>{
                               return (
                                   <a href="#" key={item.image} >
                                       {item.subTitle?<span>{item.subTitle}</span>:""}
                                       <p className="title">{item.title}</p>
                                       <img src={item.image} alt="" />
                                   </a>
                               )
                           })
                       }
                   </div>
                   
                       {
                           downList.map(item=>{
                               return(
                                   <div className="local__bottom" key={item.image}>
                                        <img src={item.image} alt=""   />
                                        <p className="title">{item.title}</p>
                                        <p className="desc">{item.subTitle}</p>
                                   </div>
                               )
                           })
                       }
                   
                   
                   <a className="local__more">查看更多</a>
                </div>

                
            )
        }
        return <></>

        
    }
}

export default Local
