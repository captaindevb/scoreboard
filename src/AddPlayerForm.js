import React from 'react';

export class AddPlayerForm extends React.Component {
    textInput = React.createRef();
    handleSubmit = (e) => {
        e.preventDefault(); //submit기본이벤트인 페이지 로드되는것 막기
        const form = document.getElementById("form");
        const player = document.getElementById("player");

        console.log(form.checkValidity());
        console.log(player.validity.valid); //validate

        this.props.addPlayer(this.textInput.current.value);
        e.currentTarget.reset();
    }
    render() {
        return (
            <form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
                {/*리액트 엘리먼트이기때문에 input 닫는 태그 있어야함*/}
                <input id="player" className="input" placeholder="enter a player's name"
                       type="text" ref={this.textInput} required/>
                <input className="input" value="Add Player" type="submit"/>
            </form>
        );
    }
}