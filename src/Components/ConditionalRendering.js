import React from 'react'

function ConditionalRendering() {
    const age = 18;
    // if(age>18){
    //     return <p>you are eligible to vote</p>
    // }else{
    //     return <p>you are not eligible to vote</p>
    // }
    return(
    <div>
        { age>18 ? (<p>you are eligible to vote</p>) : (<p>you are not eligible to vote</p>)}
    </div>
    )
}

export default ConditionalRendering