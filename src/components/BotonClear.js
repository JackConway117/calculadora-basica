import React from "react";
import "../css/Clear.css"

const BotonClear = (props) =>(
    <div className="botonClear" onClick={props.manejarClear}>
        {props.children}
    </div>
)

export default BotonClear;