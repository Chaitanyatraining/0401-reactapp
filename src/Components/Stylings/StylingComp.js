import React from 'react'
import "./styles.css"
import headstyles from "./HeaderStyles.module.css"


function StylingComp() {
    // different ways of writing CSS
    //     - inline CSS
    //     - internal CSS
    //     - external CSS
    //     - module css

    const styles = {
        btnStyles : {
            backgroundColor : "orange",
            color:"white",
            padding: "20px",
            border:"none",
        },
        imgStyles :{

        }
    }

  return (
    <div>
        {/* inline css */}
        <h2 style={{color:"red",backgroundColor:"green"}}>StylingComp</h2>

        {/* Internal css */}
        <button  style={styles.btnStyles}>Submit</button>
        
        {/* External css */}
        <p className='para'>This is External css</p>

        {/* Module css */}
        <h2 className={headstyles.primaryhead}>this is Module css</h2>
        <p className={headstyles.parahead}>this is Module css</p>
    </div>
  )
}

export default StylingComp