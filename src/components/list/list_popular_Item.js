import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
export default class Popular_Item extends Component {
    constructor(props){
        super(props)
        this.state = {
           
      }
    }
    render() {
        let { item:data } = this.props
        return (
            <div>
                <Carousel className="space-carousel"
                    
                    cellSpacing={1}
                    slideWidth={0.425}
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
                          boxShadow: '0px 3px 1px rgba(0, 0, 47%, 0.12)',
                          width: '300px',
                          height: '356px',
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
                            width: '300px',
                            height: '200px',
                            verticalAlign: 'top',
                            
                          }}
                        />
                        <div 
                        style={{
                            height: '157px',
                            paddingLeft: '17px'
                        }}>
                            <p 
                            style={{
                                width: '300px',
                                height: '50px',
                                padding: '17px 0 10px 0px',
                                fontSize:'24px',
                                color:'#ccc'
                            }}
                            >{val.productType}.{val.placeLabel}</p>
                            <p
                            style={{
                                width:'231px',
                                fontSize:'32px',
                                height: '50px',
                                lineHeight:'50px',
                                fontWeight:'700',
                                color:'#333',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>{val.title}</p>
                            <p 
                            style={{
                                width:'160px',
                                height:"40px",
                                fontSize:'34px',
                                fontWeight:'500',
                                marginTop: '10px',
                                float: 'left',
                                color:'#ff7100'
                            }}>
                                <em >￥</em>
                                <span 
                                style={{margin:'0 8px 0 0'}}
                                >{val.priceLabel}</span>
                                <em style={{fontSize:'24px',color:'#ccc'}}>起</em>
                            </p>
                            <p 
                            style={{
                                width:'80px',
                                height:'24px',
                                fontSize:'22px',
                                marginTop:'20px',
                                float:'right',
                                color:'#333'
                                }}>{val.days}</p>
                        </div>
                       
                      </a>
                    ))}
                </Carousel>
                
            </div>
        )
    }
}
