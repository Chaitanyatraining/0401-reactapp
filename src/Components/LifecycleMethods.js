import React, { Component } from 'react'

export class LifecycleMethods extends Component {
    constructor(){
        super();
        console.log("constructor executed")
    }
    
    static getDerivedStateFromProps(){
        console.log("static getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("componentdidmount")
    }

  render() {
    return (
      <div>
        <h2>LifecycleMethods</h2>

      </div>
    )
  }
}

export default LifecycleMethods