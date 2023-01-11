import React from 'react'

function FuncComp({courseName,courseDuration}) {
    // console.log(props)
  return (
    <div>
        <h2>FuncComp</h2>
        <h3>Course Name :{courseName} </h3>
        <h2>Course Duration : {courseDuration}</h2>

        <h2>Product details</h2>
        
    </div>
  )
}

export default FuncComp