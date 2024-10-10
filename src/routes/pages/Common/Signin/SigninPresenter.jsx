import React from "react";

import { SigninList } from "./SigninList"

export const SigninPresenter = ({
    email, setEmail, pw, setPw, Signin
}) => {
    return(
        <div className="Signin-container">
            <SigninList
                email={email} setEmail={setEmail}
                pw={pw} setPw={setPw}
                Signin={Signin}
            />
        </div>
        


    )
}