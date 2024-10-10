import React from "react";

import { InputBox } from "../components/Sign/InputBox";
import { ButtonBox } from "../components/Sign/ButtonBox";
import { Layout } from "../../../../components/Layout/Layout";
import '../components/Sign/BoxList.css'

export const SignupList = ({
    email, setEmail, pw, setPw, tel, setTel, name, setName, nickname, setNickname, Signup
}) => {
    return(
        <Layout
            type = {'sign'}
            title_name = {'회원가입'}
            main_contents = {
                <div className="List-container">
                    <div className="signup_id">
                        <InputBox 
                            title = {'아이디(이메일)'}
                            type = {'text'}
                            placeholder = {'아이디(이메일)을 입력해주세요'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <ButtonBox
                            title = {'중복확인'}
                        />
                    </div>
        
                    <InputBox 
                        title = {'비밀번호'}
                        type = {'password'}
                        placeholder = {'비밀번호를 입력해주세요'}
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
        
                    <InputBox
                        title = {'비밀번호 확인'}
                        type = {'password'}
                        placeholder = {'비밀번호를 한번 더 입력해주세요'}
                    />
        
                    <InputBox
                        title = {'이름'}
                        type= {'text'}
                        placeholder = {'이름을 입력해주세요'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
        
                    <InputBox
                        title = {'예명'}
                        type = {'text'}
                        placeholder = {'예명을 입력해주세요'}
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
        
                    <div className="signup_num">
                        <InputBox
                            title = {'핸드폰 번호'}
                            type = {'text'}
                            placeholder = {'핸드폰 번호를 입력해주세요'}
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />
                        <ButtonBox
                            title = {'인증번호 전송'}
                        />
                    </div>
        
                    <ButtonBox
                        title = {'회원가입'}
                        onClick = {Signup}
                    />
        
                </div>
            }
        
        />
    )
}
