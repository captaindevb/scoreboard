import React from 'react';

export class AddPlayerForm extends React.Component {
    state = {
        value: ''
    }
    handleValueChange = (e) =>{
        console.log(e);
        this.setState({value: e.target.value}); // 이벤트가 발생한 타겟의 value 값
    }
    render() {
        return (
            <form className="form">
                {/*리액트 엘리먼트이기때문에 input 닫는 태그 있어야함*/}
                <input className="input" placeholder="enter a player's name" type="text" value={this.state.value} onChange={this.handleValueChange}/>
                <input className="input" value="Add Player" type="submit"/>
            </form>
        );
    }
}