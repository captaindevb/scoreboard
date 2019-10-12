import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';

//Header란 이름을 갖고 쓸 수 있게 배포하기 . 앞에 export 붙여서 named export 후 App.js에서 추가해줌.
export const Header = ({players, title}) => {
    //const {players, title} = props;
    return (
        <header className="header">
            <Stats players={players} />
            <h1 className="h1">{title}</h1>
            <Stopwatch></Stopwatch>
        </header>
    ); // 가독성을 위해 ()로 감싸기
}

// eslint-disable-next-line react/no-typos
Header.PropTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        score:PropTypes.number,
        name:PropTypes.string
    }))
}

Header.defaultProps = {
    title: '스코어보드'
}