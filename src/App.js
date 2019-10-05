import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import {Player} from './Player';
import {AddPlayerForm} from './AddPlayerForm';


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

            <Header title="My score board" players={this.state.players}/>
          { // 여기서 부터 jsx expression
            this.state.players.map((player) => { //props로  app에서 내려준 값 + map 사용해서 새로운 배열 리턴하기
              return ( //2. 콜백 펑션 넘겨주기
                  <Player name={player.name} score={player.score} id={player.id} key={player.id}
                          removePlayer={this.handleRemovePlayer}
                          changeScore={this.handleChangeScore}
                  />

              )
            })
          }
          <AddPlayerForm addPlayer={this.heandleAddPlayer}/>
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

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore', id, delta);
    this.setState( prevState => {
        const player = prevState.players.find(player => player.id === id);
        player.score += delta;
        return {
            player: [ ...prevState.players ] // 새로운 바구니에서 배열을 가지고 와서 펼쳐라
        }

        //map으로 할 경우 [] 필요없음
        // player: prevState.players.map(player => {
        //  if(player.id === id){
        //      player.score+= delta;
        //  }
        //  return player;
        // })
    })
  }

  heandleAddPlayer(name){
      console.log('핸들에드플레이어 ㅋ', name);
  }
}




export default App;
