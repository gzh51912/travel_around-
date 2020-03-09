import React, { Component } from 'react'
import Local from './Local'
import WeekList from './WeekList'
export default class MIndexWeekAndLocal extends Component {
    constructor(props){
        super(props)
        this.state = {
            status1: true,
            status2: false
        }
    }
    toggle=()=>{
        this.setState({
            status1:true,
            status2: false
        })
    }
    handover=()=>{
        this.setState({
            status1:false,
            status2:true
        })  
    }
    render() {
        let { status1,status2 } = this.state
        let {aroundLump:{weekList,local}} = this.props
        
        return (
            <div className="mIndexWeekAndLocal">
                 <ul className="mIndexWeekAndLocal__nav clearfix">
                     <li  onClick={this.toggle} style={{background:status1? '#fff' : ''}}>
                         周边短途
                         <span style={{display:!status1?'none':''}}></span>
                    </li>
                     <li onClick={this.handover} style={{background:status2? '#fff' : ''}}>
                         当地玩耍
                         <span style={{display:status2?'':'none'}}></span>
                    </li>
                 </ul>
                 <div className="mIndexWeekAndLocal__week" style={{display:status1?'':'none'}}>
                    <WeekList weekList={weekList} />
                 </div>
                 <div className="mIndexWeekAndLocal__local" style={{display:status2?'':'none'}}>
                     <Local {...local} />
                 </div>
            </div>
        )
    }
}
