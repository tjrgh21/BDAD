import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MainPresenter from "./MainPresenter";


/* 
    하나의 페이지를 Container와 Presenter로 분리하고 각 역할은 아래와 같다

    * Container: 백엔드에서 데이터를 불러와 state 관리, 로직을 담당하는 함수 선언
    * Presenter: 불러온 데이터를 토대로 페이지에 출력, 함수 사용
*/
const MainContainer = () => {
    const [text, setText] = useState('');
    const [isSignUp, setIsSignUp] = useState(null);
    const [isSignIn, setIsSignIn] = useState(null);
    const [userDatas, setUserDatas] = useState([
        {
            category : '전화신점',
            name : '꽃비',
            content : "운명을 밝혀주는 신비한 통찰",
            face : "list1.png",
            status : "대기중",
            price : "500",
        },
        {
            category : '전화사주',
            name : '월하',
            content : "건강+행운, 최고의 삶으로 안내.",
            face : "list1.png",
            status : "상담중",
            price : "400",
        },
        {
            category : '전화타로',
            name : '설연',
            content : "당신의 결정을 밝혀내는, 심오한 통찰의 제공자.",
            face : "list1.png",
            status : "부재중",
            price : "400",
        },
        {
            category : '전화타로',
            name : '혜리',
            content : "사랑의 미로에서 길을 찾게 해주는, 마음의 지도자.",
            face : "list1.png",
            status : "대기중",
            price : "400",
        },
        {
            category : '전화타로',
            name : '주리',
            content : "미래의 열쇠를 쥐고 있는 안내자.",
            face : "list1.png",
            status : "상담중",
            price : "400",
        },
        {
            category : '전화타로',
            name : '엘린',
            content : "내면의 목소리를 들려주는, 영혼의 속삭임을 해석.",
            face : "list1.png",
            status : "부재중",
            price : "400",
        },
        {
            category : '전화타로',
            name : '미란다',
            content : "꿈과 희망을 실현시키는, 미래 설계사.",
            face : "list1.png",
            status : "상담중",
            price : "400",
        },
        {
            category : '전화타로',
            name : '수정',
            content : "영혼과 우주를 잇는, 내면의 다리.",
            face : "list1.png",
            status : "상담중",
            price : "400",
        },
        {
            category : '전화타로',
            name : '헤나',
            content : "방향을 설정하는, 목적지의 안내인.",
            face : "list1.png",
            status : "상담중",
            price : "400",
        },
    ])

    const buttonClick = async () => {
        const result = await fetch('http://localhost:3333/test', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            }
        });

        const data = await result.json();
        setText(data.data);
    }

    const SignUp = async () => {
        const result = await fetch('http://localhost:3333/user/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            }
        });

        const data = await result.json();
        console.log(data)
        setIsSignUp(data)
    }

    const SignIn = async () => {
        const result = await fetch('http://localhost:3333/user/signin', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            }
        });

        const data = await result.json();
        console.log(data)
        setIsSignIn(data)
    }

    /*
        Container는 Presenter만 반환한다

        * Container에서 선언한 함수를 Presenter에게 props로 넘겨주어 사용한다.
    */
    return (
        <MainPresenter
            text={text}

            buttonClick={buttonClick}

            SignUp={SignUp}
            isSignUp={isSignUp}

            SignIn={SignIn}
            isSignIn={isSignIn}

            userDatas = {userDatas}
        />
    )
}

export default MainContainer;