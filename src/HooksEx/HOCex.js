import React, { Component } from 'react'

const EnComponent=(OrComponent)=>{
class NewComponent extends Component
 {
    constructor(){
        super()
        this.state={
            count:0
        }
      }
      inc=()=>{
        this.setState(({count})=>(
            {count:count+1})
            )
      }
    render(){
        return <OrComponent 
        name="Suit"
        count={this.state.count}
        inc={this.inc}/>
    }
 }
 return NewComponent
}

export default EnComponent