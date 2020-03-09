import React, { Component } from 'react'
import HomeTop from './hometop'
import Homehot from './homehot'
import Homebanner from './homebanner'
export default class MIndexBanner extends Component {
    render() {
        let {hometop,banner} = this.props
        return (
            <div className="mIndexBanner">
                <HomeTop />
                <Homehot  homehot={hometop} />
                <Homebanner banner={banner} />
            </div>
        )
    }
}
