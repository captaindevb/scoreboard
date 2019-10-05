import React from 'react';

export class AddPlayerForm extends React.Component {
    state = {
        value: ''
    }
    handleValueChange = (e) =>{
        console.log(e);
        this.setState({value: e.target.value}); // 이벤트가 발생한 타겟의 value 값
    }
    handleSubmit = (e) => {
        e.preventDefault(); //submit기본이벤트인 페이지 로드되는것 막기
        this.props.addPlayer(this.state.value);
        this.setState({value:''});
    }
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                {/*리액트 엘리먼트이기때문에 input 닫는 태그 있어야함*/}
                <input className="input" placeholder="enter a player's name" type="text" value={this.state.value} onChange={this.handleValueChange}/>
                <input className="input" value="Add Player" type="submit"/>
            </form>
        );
    }
}