import React from 'react';
import {Counter} from "./Counter";


//this.props.id 받아줘야하고, 함수 선언문을 넣어야 하기때문에 익명함수로 랩핑하기
export class Player extends React.PureComponent { // 내꺼만 렌더링

    render() {
        console.log(this.props.name, ' rendered');
        return (
            <div className="player">
        <span className="player-name">
            {/*//3. 콜백 펑션 호출 */}
            <button className="remove-player" onClick={() => {this.props.removePlayer(this.props.id)}}>X</button>
            {this.props.name}
        </span>
                <Counter score={this.props.score} changeScore={this.props.changeScore} id={this.props.id}/>
            </div>
        )
    }
}
