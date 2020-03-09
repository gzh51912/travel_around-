import React, { Component } from 'react'

export default class MIndexSecondNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            MIndexSecondNav:[
                {
                    img:"MIndexSecondNav_a.png",
                    text:"主题游",
                    subhead:"个性创作"
                },
                {
                    img:"MIndexSecondNav_b.png",
                    text:"亲子游",
                },
                {
                    img:"MIndexSecondNav_c.png",
                    text:"摄影游",
                },
                {
                    img:"MIndexSecondNav_d.png",
                    text:"户外游",
                },
                {
                    img:"MIndexSecondNav_e.png",
                    text:"活动赛事",
                },
                {
                    img:"MIndexSecondNav_f.png",
                    text:"瑜伽行",
                },
                {
                    img:"MIndexSecondNav_g.png",
                    text:"游侠旅拍",
                },
                {
                    img:"MIndexSecondNav_a1.png",
                    text:"定制游",
                },
                {
                    img:"MIndexSecondNav_b1.png",
                    text:"签证",
                },
                {
                    img:"MIndexSecondNav_c1.png",
                    text:"游轮",
                },
                {
                    img:"MIndexSecondNav_d1.png",
                    text:"游侠集市",
                }
            ]
        }
    }
    render() {
        let {MIndexSecondNav} = this.state
        return (
            <div className="MIndexSecondNav">
                {
                    MIndexSecondNav.map(item=>{
                        return (
                            <a href="#" key={item.text}>
                                <img src={require('../../../img/'+item.img)} />
                                <span>{item.text}</span>
                                <em style={{display:item.subhead?"":"none"}}>{item.subhead}</em>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}
