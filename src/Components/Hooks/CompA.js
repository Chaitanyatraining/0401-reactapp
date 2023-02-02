import React from 'react'
import {useContext} from '../Hooks/UseContextHook'

function CompA() {
  return (
    <div>
        <h2>CompA</h2>
         <useContext.Consumer>
            {value=> <h2>{value}</h2>}
        </useContext.Consumer>
    </div>

  )
}

export default CompA