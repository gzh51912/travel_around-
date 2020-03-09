import React, { Component } from 'react'
import { List, Stepper } from 'antd-mobile';

export default class Andex extends Component {
    constructor(props) {
        super(props);
        this.state = {
          val: 3,
          val1: 2,
        };
      }
      onChange = (val) => {
        console.log(val,"onChange");
        //this.setState({ val });
      }
      onChange1 = (val1) => {
       // console.log(val,"val1");
       // this.setState({ val1 });
      }
    render() {
        return (
            <div style={{width:'750px',height:'60px'}}>
                <List>
        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: '100%', minWidth: '100px' }}
              showNumber
              max={10}
              min={1}
              value={this.state.val}
              onChange={this.onChange}
              style={{touchAction: 'none'}}
            />}
        >
        
        </List.Item>
      </List>
            </div>
        )
    }
}
