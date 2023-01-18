import React, { Component } from 'react'

class UseStateComp extends Component {
    // constructor(props){
    //     super(props) 
        
    //     this.state = {
    //         counter : 0,
    //     }
    // }

        state = {
            counter : 0,
            type:"laptops"
        }

        handleIncrement = ()=>{
            //never mutate the state directly
            // if you want to update the state then use "setState"
            this.setState({
                counter:this.state.counter + 1
            },
            // ()=>{
            //     console.log(this.state.counter)
            // }
            )
        }
        // console.log(this.state.counter)
    
        handleDecrement = ()=>{
            this.setState({
                counter : this.state.counter - 1
            })
        }

  render() {
    return (
      <center>
        <h2>UseStateComp</h2>
        <h4> count : {this.state.counter}</h4>
        <button className='btn btn-info me-3' onClick={this.handleIncrement}>Increment</button>
        <button className='btn btn-danger' onClick={this.handleDecrement}>Decrement</button>
      </center>
    )
  }
}

export default UseStateComp