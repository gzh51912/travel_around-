import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile'

var mapStateToProps = (state)=> state
@connect(mapStateToProps)

class List_Top_Banner extends Component {
    state = {
        imgHeight: 310,
      }
    render() {
        let { list : {banner:data} } = this.props
        return (
            <div className="list_top_banner">
                <Carousel
                    autoplay={true}
                    autoplayInterval={1000}
                    infinite
                    style={{touchAction: 'none'}}
                >
                    { data!==undefined ?
                    data.map(val => (
                      <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%',  height: this.state.imgHeight }}
                      >
                        
                        <img
                          src={val.image}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top' }}
                        />
                      </a>
                    )):<></>
                    }
                </Carousel>
            </div>
        )
    }
}


export default  List_Top_Banner
