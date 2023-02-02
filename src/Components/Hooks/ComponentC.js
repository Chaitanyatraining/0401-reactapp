import React from 'react'
import {useContext} from '../Hooks/UseContextHook'

function ComponentC() {
  return (
    <div>
        <h2>ComponentC</h2>
        <useContext.Consumer>
            {value=> <h2>{value}</h2>}
        </useContext.Consumer>
    </div>
  )
}

export default ComponentC