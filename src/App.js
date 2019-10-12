import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import {Player} from './Player';
import {AddPlayerForm} from './AddPlayerForm';
import {connect} from "react-redux";


class App extends React.Component {
    maxId = 4; //클래스의 속성.
    render() {
        return (
            <div className="scoreboard">
                <Header players={this.props.players} />

                {
                    this.props.players.map((player) => {
                        return (
                            <Player name={player.name} score={player.score} id={player.id} key={player.id}
                                // 2. props로 콜백 펑션을 전달
                                    removePlayer={this.handleRemovePlayer}
                                    changeScore={this.handleChangeScore} />
                        )
                    })
                }

                <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
            </div>
        );
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
      this.setState(prevState => {
          return {
              player: prevState.players.map(player => {
                  if (player.id === id) {
                      player.score += delta;
                  }
                  return player;
              })
          }
      })
  }

  heandleAddPlayer = (name) => {
      console.log('핸들에드플레이어', name);
      this.setState(prevState => {
          // prevState.players.push({name:name, id: ++this.maxId, score: 0});
          // return {
          //     players: [ ...prevState.players ]
          // }
          const players = [ ...prevState.players ]; //원본배열을 훼손하지않고 배열 추가하기
          players.push({name:name, id: ++this.maxId, score: 0});
          return {
              players  //players: players 으로 표현하지만 똑같으므로 줄여쓸수있다.
          }
      })
  }
}

const mapStateToProps = (state) => ({
    // 왼쪽은 props, 오른쪽이 store state
    players: state.playerReducer.players
})

export default connect(mapStateToProps)(App);
