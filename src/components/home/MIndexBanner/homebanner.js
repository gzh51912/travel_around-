import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';


class Homebanner extends Component {
    state = {
        imgHeight: 310,
      }
    render() {
        let {banner:data} = this.props
        return (
            <div className="homebanner">
                <div className="homebannerimg"></div>
                <Carousel
                    autoplay={true}
                    autoplayInterval={1000}
                    infinite
                    style={{touchAction: 'none'}}
                >
                    {data.map(val => (
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
                    ))}
                </Carousel>
            </div>
        )
    }
}

export default  Homebanner
