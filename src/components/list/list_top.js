import React, { Component } from 'react'
import List_Top_Header from './list_top_header'
import List_Top_Search from './list_top_search'
import List_Top_Banner from './list_top_banner'

export default class ListTop extends Component {
    render() {
        return (
            <div className="list_top">
                <List_Top_Header />
                <List_Top_Search />
                <List_Top_Banner />
                
            </div>
        )
    }
}
