import React, { Component } from 'react'

export default class HomeHop extends Component {
    render() {
        return (
            <div className="hometop clearfix">
                <div className="topleft">
                    <span>广州</span>
                    <i></i>
                </div>
                <div className="topright">
                    <i></i>
                    <input placeholder="探索全球小众目的地和创意玩法" data-growing-title="" type="search"
                    className="search__input"></input>
                </div>
            </div>
        )
    }
}
