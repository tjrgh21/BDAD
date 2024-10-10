import React from "react";
import './BoxList.css'

export const ButtonBox = (props) => {

    const {title, onClick} = props

    return(
        <div class = "ButtonBox-container">
            <button onClick={onClick}><span>{title}</span></button>
        </div>
    )
}