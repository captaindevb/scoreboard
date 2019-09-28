import React from 'react';

//state를 가지려면 반드시 class 컴포넌트여야한다. class 컴포넌트 만드는 법
//class는 react를 상속받아야 한다. extends React.Component
//render 오버라이딩해서 React Element를 리턴해야함.
//속성앞에 반드시 this를 붙여야한다. new로 클래스를 생성하기때문에 자기자신을 나타내는 this를 붙여준다.
export class Counter extends React.Component{
    increment = (delta) => {
        this.props.changeScore(this.props.id, delta);
    }

    //리액트 이벤트 : 선언형 스타일 : 함수 선언문을 우측에 배치, this를 bind 해 주어야 하는 이유.
    render() { //이미 컴포넌트가 갖고 있는 메서드이기 때문에 오버라이딩 하는 것.
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={ () => this.increment(-1)}> -</button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={ () => this.increment(1)}> +</button>
            </div>
        )
    }
}