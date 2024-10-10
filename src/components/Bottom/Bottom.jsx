import React from "react";
import "./Bottom.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Bottom = () => {
    return(
            <div class="bottom-nav-container">
                <div class="bottom-nav-wrap">
                    <div class="bottom-nav-item">

                        <a class="bottom-nav-tap 0 " href="/"><div><i class="fa-solid fa-qrcode"></i></div><span>메뉴</span></a>

                        <a class="bottom-nav-tap 1 " href="/"><div class="nav-logo"><i class="fa-solid fa-house"></i></div><span>홈</span></a>

                        <a class="bottom-nav-tap 2 " href="/signin"><div><i class="fa-solid fa-star"></i></div><span>즐겨찾기</span></a>

                        <a class="bottom-nav-tap 3 " href="/signup"><div><i class="fa-solid fa-circle-user"></i></div><span>마이메뉴</span></a>

                        <a class="bottom-nav-tap 4 " href="/signup"><div><i class="fa-solid fa-wallet"></i></div><span>충전하기</span></a>

                    </div>
                </div>
            </div>
    )
}