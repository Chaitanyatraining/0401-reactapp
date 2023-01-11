import {Component} from 'react'

class ClassComp extends Component{
    render(){
        return(
            <div>
                <h2>Class Comp</h2>
                <p>product Name :{this.props.productName} </p>
                <p>product price :{this.props.productPrice} </p>
            </div>
        )
    }
}

export default ClassComp
