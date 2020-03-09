import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile';
var mapStateToProps = (state) => state
@connect(mapStateToProps)
class List_Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
           
    }
}
    render() {
        let { list : { nav :data } } = this.props
        return (
            <div className="list_nav">
                {
                    data!==undefined?
                    <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={1}
                    slideWidth={0.2}
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
                          width: '80px',
                          height: '120px',
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
                            width: '80px',
                            height: '80px',
                            marginBottom: '16px',
                            verticalAlign: 'top'
                          }}
                        />
                        <p
                        style={{
                            width:'100%',
                            height:'24px',
                            fontSize:'20px',
                            fontWeight:'300',
                            color:'#000',
                            textAlign:'center',
                            position: 'absolute',
                            bottom:'10px',
                            left: '2px'    
                        }}>{val.title}</p>
                        
                      </a>
                    ))}
                </Carousel>:<></>
                }
            </div>
        )
    }
}

export default  List_Nav
