import React, { useState } from "react";
import { SignupPresenter } from "./SignupPresenter";


const SignupContainer = () => {

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [tel, setTel] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const Signup = async () => {

        // if (!userInfo.email.length) {
        //     alert('이메일을 입력해주세요!');
        //     return;
        // }

        // if (!userInfo.pw.length) {
        //     alert('비밀번호를 입력해주세요!');
        //     return;
        // }

        const result = await fetch('http://localhost:3333/signup', {
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
                email : email,
                pw : pw,
                name : name,
                tel : tel,
                nickname : nickname,
            }),
        });

        const data = await result.json();
        console.log(data);

        // if (data.status === 4091) {
        // //     // 4091은 문제가 없다는 것을 뜻하므로 메인 페이지로 이동
        //     navigate('/');
        // }

        // // // 문제가 있을 경우 에러 메시지를 사용자에게 알려준다.
        // alert(data.message);

    }

    return(
        <SignupPresenter
            email={email} setEmail={setEmail}
            pw={pw} setPw={setPw}
            tel={tel} setTel={setTel}
            name={name} setName={setName}
            nickname={nickname} setNickname={setNickname}
            Signup={Signup}
        />
    )
}

export default SignupContainer;