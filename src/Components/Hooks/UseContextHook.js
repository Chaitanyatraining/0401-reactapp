import React from 'react'
import CompA from './CompA'
import ComponentC from './ComponentC';

export const useContext = React.createContext();

function UseContextHook() {
  return (
    <>
      {/* 
      context provides a way to pass data through the component tree without having to pass props 
        down manually at every level.
      */}
      <center>
      <h2>UseContextHook</h2>
      <useContext.Provider value={"reactJs Training"}>
        <ComponentC />
        <CompA />
      </useContext.Provider>
      </center>
    </>
  )
}

export default UseContextHook