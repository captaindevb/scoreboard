import React from 'react';
import {Counter} from "./Counter";


//props.id 받아줘야하고, 함수 선언문을 넣어야 하기때문에 익명함수로 랩핑하기
export const Player = (props) =>  (
    <div className="player">
        <span className="player-name">
            {/*//3. 콜백 펑션 호출 */}
            <button className="remove-player" onClick={() => {props.removePlayer(props.id)}}>X</button>
            {props.name}
        </span>
        <Counter score={props.score} changeScore={props.changeScore} id={props.id}/>
    </div>
);