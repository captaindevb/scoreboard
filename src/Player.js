import React from 'react';
import {Counter} from "./Counter";
import PropTypes from 'prop-types';


//this.props.id 받아줘야하고, 함수 선언문을 넣어야 하기때문에 익명함수로 랩핑하기
export class Player extends React.Component { // 내꺼만 렌더링
    static price  = 1000;
    static propTypes = {
        removePlayer: PropTypes.func,
        id: PropTypes.number
    };
    render() {
        const {removePlayer, id, name, score, changeScore} = this.props;
        return (
            <div className="player">
        <span className="player-name">
            {/*//3. 콜백 펑션 호출 */}
            <button className="remove-player" onClick={() => {removePlayer(id)}}>X</button>
            {name}
        </span>
                <Counter score={score} changeScore={changeScore} id={id}/>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps);
        return nextProps.score !== this.props.score ? true: false;
    }
}


