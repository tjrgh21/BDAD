import React from "react";

import { SignupList } from "./SignupList";

export const SignupPresenter = ({
    email, setEmail, pw, setPw, tel, setTel, name, setName, nickname, setNickname, Signup
}) => {
    return(     
        
        <div className="Signup-contianer">
            <SignupList
                email={email} setEmail={setEmail}
                pw={pw} setPw={setPw}
                tel={tel} setTel={setTel}
                name={name} setName={setName}
                nickname={nickname} setNickname={setNickname}
                Signup={Signup}
            />
        </div>
            
    )
}