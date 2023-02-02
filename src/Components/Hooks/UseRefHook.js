import React, { useEffect, useRef } from 'react'

function UseRefHook() {
        const data = useRef(null)

        const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(data.current.value)
        }

        useEffect(()=>{
            data.current.focus();
        })

    // useState -- useState will re-render when the state is changed.

    // useRef -- useRef doesn't notify you when its content changes,
    // mutation (.current) property which doesn't cause a re render
  return (
    <>
    <center>
        <h2>UseRefHook</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter text' ref={data}  />
        <button className='btn btn-warning ms-2' type="submit">Submit</button>
        </form>
    </center>
    </>
  )
}

export default UseRefHook