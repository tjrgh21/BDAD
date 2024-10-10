import React from "react";

import { InputBox } from "../components/Sign/InputBox";
import { ButtonBox } from "../components/Sign/ButtonBox";
import { Layout } from "../../../../components/Layout/Layout";
import '../components/Sign/BoxList.css'

export const SigninList = ({
    email, setEmail, pw, setPw, Signin
}) => {
    return(
        <Layout
            type = {'sign'}
            title_name = {"로그인"}
            main_contents = {
                <div className="List-container">
                        
                    <div class="signin-img">
                        <img src="jooyajooya.png"/>
                    </div>

                    <InputBox
                        title = {'아이디(이메일)'}
                        type = {'text'}
                        placeholder = {'아이디(이메일)을 입력해주세요'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputBox
                        title = {'비밀번호'}
                        type = {'password'}
                        placeholder = {'비밀번호를 입력해주세요'}
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />

                    <ButtonBox
                        title = {'로그인'}
                        onClick = {Signin}
                    />

                </div>
            }

        />
    )
}
