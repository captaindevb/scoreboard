import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header';


//기존 컴포넌트 ↑
//state를 가지려면 반드시 class 컴포넌트여야한다. class 컴포넌트 만드는 법
//class는 react를 상속받아야 한다. extends React.Component
//render 오버라이딩해서 React Element를 리턴해야함.
//속성앞에 반드시 this를 붙여야한다. new로 클래스를 생성하기때문에 자기자신을 나타내는 this를 붙여준다.
class Counter extends React.Component{
  state = {
    score: 30
  }

  increment = () => {
    console.log('increment' );
    //this.state.score += 1; //UI 렌더링이 안된다. 단순히 모델값만 바뀜.
    //this.setState({score: this.state.score + 1});
    // 반드시 setState로 상태 변경 할것. 비동기로 동작하므로 콜백 펑션으로 상태 변경을 하라.
    // 머지된다. (오버라이트 된다.)
    this.setState( (prevState) => {
      return{
        score: prevState.score + 1
      }
    })
  }

  //리액트 이벤트 : 선언형 스타일 : 함수 선언문을 우측에 배치, this를 bind 해 주어야 하는 이유.
  render() { //이미 컴포넌트가 갖고 있는 메서드이기 때문에 오버라이딩 하는 것.
    return(
        <div className="counter">
          <button className="counter-action decrement" > -</button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" onClick={this.increment}> +</button>
        </div>
    )
  }
}

//props.id 받아줘야하고, 함수 선언문을 넣어야 하기때문에 익명함수로 랩핑하기
const Player = (props) =>  (
    <div className="player">
        <span className="player-name">
            {/*//3. 콜백 펑션 호출 */}
          <button className="remove-player" onClick={() => {props.removePlayer(props.id)}}>X</button>
          {props.name}
        </span>
      <Counter score={props.score}/>
    </div>
);


class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'LEB', score: 40, id: 2},
      {name: 'MENA', score: 50, id: 3},
      {name: 'SHJ', score: 20, id: 4},
    ]
  }
  render(){
    return (
        <div className="scoreboard">
          <Header title="My score board" totalPlayers={11}/>
          { // 여기서 부터 jsx expression
            this.state.players.map((player) => { //props로  app에서 내려준 값 + map 사용해서 새로운 배열 리턴하기
              return ( //2. 콜백 펑션 넘겨주기
                  <Player name={player.name} score={player.score} id={player.id} key={player.id} removePlayer={this.handleRemovePlayer}/>
              )
            })
          }
        </div>
    )
  }

  // 1. 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log('플레이어 삭제!!!!! id: ', id);
    this.setState( prevState => ({
      players:  prevState.players.filter(player => player.id !== id)
    }));
  }
}



export default App;
