import React, { Component } from 'react'

export default class Dest_Item extends Component {
    render() {
        let { data } = this.props
        return (
            <div className="content__List clearfix" >
                {
                    data.map((item,index)=>{
                        if(index<3){
                            return(
                                <a href="#" key={item.url}>
                                    <img src={item.image} alt="" />
                                    <p className="tilte">{item.title}</p>
                                    <p className="subTitle">{item.subTitle}</p>
                                </a>
                            )
                        }else{
                            return(
                                <p className="tilte_sub" key={item.url}>{item.title}</p>  
                            )
                        }
                        
                    })
                }
            </div>
        )
    }
}
