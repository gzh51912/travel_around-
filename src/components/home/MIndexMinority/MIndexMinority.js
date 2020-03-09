import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';

export default class MIndexMinority extends Component {
    constructor(props){
        super(props)
        this.state = {
           
      }
    }
    render() {
        let { minority:{title, subTitle, data} } = this.props    
        return (
            <div className="mIndexMinority">
                <div className="mIndexMinority__head">
                    <p className="head__title">{title}</p>
                    <p className="head__desc">{subTitle}</p>
                </div>
                <div className="MinorityContainer">
                {
                    data!==undefined?
                    <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={1}
                    slideWidth={0.34}
                    dots={false}
                    infinite
                    afterChange={index => this.setState({ slideIndex: index })}
                    style={{touchAction:'none'}}
                >
                    {data.map((val, index) => (
                      <a
                        key={val}
                        style={{
                          display: 'block',
                          position: 'relative',
                          top: this.state.slideIndex === index ? -10 : 0,
                          boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                          width: '250px',
                          height: '304px',
                          verticalAlign: 'top'
                        }}
                      >
                        <img
                          src={val.image}
                          alt=""
                          onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                          }}
                          style={{
                            width: '250px',
                            height: '304px',
                            verticalAlign: 'top'
                          }}
                        />
                        <p
                        style={{
                            width:'100%',
                            height:'42px',
                            fontSize:'32px',
                            fontWeight:'700',
                            color:'#fff',
                            textAlign:'center',
                            position: 'absolute',
                            bottom:'45px',
                            left: '2px'    
                        }}>{val.title}</p>
                        <p
                        style={{
                            width:'100%',
                            height:'32px',
                            fontSize:'24px',
                            color:'#fff',
                            textAlign:'center',
                            position: 'absolute',
                            bottom:'12px',
                            left: '2px'    
                        }}>{val.subTitle}</p>
                      </a>
                    ))}
                </Carousel>:<></>
                }
                </div>
            </div>
        )
    }
}
