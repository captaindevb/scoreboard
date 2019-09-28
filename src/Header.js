import React from 'react';
import {Stats} from "./Stats";

//Header란 이름을 갖고 쓸 수 있게 배포하기 . 앞에 export 붙여서 named export 후 App.js에서 추가해줌.
export const Header = (props) => {
    console.log(props);
    return (
        <header className="header">
            <Stats players={props.players} />
            <h1 className="h1">{props.title}</h1>
        </header>
    ); // 가독성을 위해 ()로 감싸기
}
