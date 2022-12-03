import React from "react"
import * as icons from "../data/icons"
const ScrollUpButton = ()=>{

    return(
        <>
            <button
            className="scrollUp-button"
            onClick={()=>window.scrollTo({top:0, left:0, behavior: 'smooth'})}
            >
                {icons.arrowUp}
            </button>
        </>
    )
}
export default ScrollUpButton