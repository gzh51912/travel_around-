import React, { Component } from 'react'
import IndexMuster__top from './mIndexMuster__top'
import IndexMuster__ad  from './mIndexMuster__ad '
export default class MIndexMuster extends Component {
    render() {
        return (
            <div className="mIndexMuster">
                <IndexMuster__top {...this.props} />
                <IndexMuster__ad {...this.props} />
            </div>
        )
    }
}
