import React from "react";
import './BoxList.css'

export const InputBox = (props) => {

    const {title, type, placeholder, value, onChange} = props
    
    return(
        <div class="InputBox-container">
            <span>{title}</span>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} /> 
        </div>
    )
}