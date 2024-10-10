import React, {useState} from "react";
import { SigninPresenter } from "./SigninPresenter";


const SigninContainer = () => {
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const Signin = async () => {

        const result = await fetch('http://localhost:3333/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            },
            // 입력 정보마다 state를 만든 것과 달리 하나의 객채로 관리하면 데이터 전송도 편리해진다.
            // (SignIn과 차이점을 비교하기 바람)
            body: JSON.stringify({
                email, pw
            }),
        });
        
        const data = await result.json();
        console.log(data);
        

    }


    return(
        <SigninPresenter
            email={email} setEmail={setEmail}
            pw={pw} setPw={setPw}
            Signin={Signin}
        />
    )
}

export default SigninContainer;