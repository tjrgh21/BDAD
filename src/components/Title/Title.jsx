import React, { useState } from "react";
import "./Title.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Title = (props) => {
    const {title_item, type} = props

    return(
        <div class="top-nav">
            <div class="top-nav-container">
                <div class="top-nav-wrap">
                    <div class="top-nav-item">
                        <div class="top-nav-button">
                            {
                                type === "sign"
                                ?
                                <a href="/"><i class="fa-solid fa-chevron-left"></i></a>
                                :
                                <a href=""><i class="fa-solid fa-bars"></i></a>
                            }
                        </div>
                    </div>
                    <div class="top-nav-item">
                        <span class="title-name">{title_item}</span>
                    </div>
                    <div class="top-nav-button">
                        {
                            type === "메인"
                            ?
                            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                            :
                            <a href="/"><i class="fa-solid fa-house"></i></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}