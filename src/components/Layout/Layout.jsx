import React, { useState } from "react";
import { Title } from "../Title/Title";
import { Bottom } from "../Bottom/Bottom";
import { BannerBox } from "../BannerBox/BannerBox";

import './Layout.css'

export const Layout = (props) => {
    const {main_contents, title_name, type} = props

    return(
        <div class="layout-container">
            {
                type === "메인"
                ?
                <>
                    <BannerBox/>
                    <Title
                        type = {type}
                        title_item={title_name}
                    />
                </>
                :
                <>
                    <Title
                        type = {type}
                        title_item={title_name}
                    />
                    <BannerBox/>
                </>
            }
            <div class="main-nav">
                <div class="main-nav-container">
                    <div class="main-nav-wrap">
                        {main_contents}
                    </div>
                </div>
            </div>
            <Bottom/>
        </div>
    )
}