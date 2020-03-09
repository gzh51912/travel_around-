import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem from './list_waterfall_Item'
import classNames from 'classnames'

var mapStateToProps = state => state
@connect(mapStateToProps)
class Waterfall extends Component {
    constructor(props){
        super(props)
        this.state = {
            waterfall_curtive: 0
        }
    }
    Waterfall_hit = (index)=>{
        this.setState({
            waterfall_curtive : index
        })
    }
    render() {
        let { tags, list_max } = this.props.list
        let {  waterfall_curtive }  = this.state
        return (
            <div className="list_waterfall">
                
                <div className="waterfall_title" >
                    {
                        tags!==undefined ?
                        tags.map((item,index)=>{
                            return(
                                <div key={item.title} 
                                className={classNames({'waterfall_title_item':true,
                                'clearfix':true,
                                'waterfall_active':waterfall_curtive===index})}
                                onClick={this.Waterfall_hit.bind(this,index)}
                                >{item.title}</div>
                            )
                        }):<></>
                    }
                </div>
                <div className="waterfall_container">
                    {
                        list_max!==undefined ?
                        list_max.map((item,index)=>{
                            return (
                                <div key={index + 'li'} className={classNames({'waterfall_container_none':true,'waterfall_container_item':waterfall_curtive===index})} >
                                    <ListItem item={item} />
                                </div>
                            )
                        }) : <></>
                        
                    }
                </div>
                
                
            </div>
        )
    }
}

export default  Waterfall
