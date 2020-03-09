import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionToll from './action' 
import List_Top from './list_top'
import List_Nav from './list_nav'
import List_Popular from './list_popular'
import List_Musthave from './list_musthave'
import List_Waterfall from './list_waterfall' 
import './index.scss'

@connect(null,ActionToll)
class List extends Component {
    componentDidMount(){
        this.props.List_Top()
    }
    render() {
        console.log(this.props)
        return (
            <div className="list">
                <List_Top />
                <List_Nav />
                <List_Popular />
                <List_Musthave />
                <List_Waterfall />
            </div>
        )
    }
}

export default  List
