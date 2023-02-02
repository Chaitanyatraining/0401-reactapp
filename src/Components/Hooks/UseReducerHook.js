import React, { useReducer } from 'react'

function UseReducerHook() {
  
    const reducer = (currentState,action)=>{
        // console.log(action)
       switch(action.type){
        case "INCREMENT":
            return currentState + action.payload;
        case "DECREMENT":
            return currentState - action.payload;
       
       default:
        return currentState;
               
        // reducer is used to update the state based on the action
        // returns the updated state
       }
    }

    const [count,dispatch] = useReducer(reducer,0)

  return (
    <center>
        <h2>UseReducerHook</h2>
        <h4>count : {count}</h4>
        <button onClick={()=>{dispatch({type:"INCREMENT",payload:5})}} className='btn btn-info me-3'>Increment</button>
        <button onClick={()=>{dispatch({type:"DECREMENT",payload:5})}} className='btn btn-danger'>Decrement</button>
    </center>
  )
}

export default UseReducerHook