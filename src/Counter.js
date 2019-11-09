import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "./redux/actions";
import {connect} from "react-redux";
import classNames from 'classnames';

import styles from './pages/scoreboard/Scoreboard.module.css';

//state를 가지려면 반드시 class 컴포넌트여야한다. class 컴포넌트 만드는 법
//class는 react를 상속받아야 한다. extends React.Component
//render 오버라이딩해서 React Element를 리턴해야함.
//속성앞에 반드시 this를 붙여야한다. new로 클래스를 생성하기때문에 자기자신을 나타내는 this를 붙여준다.

// 클래스 컴포넌트
// 1. React.Component 상속, 2: render 오버라이딩해서 React Element를 리턴
// 3. 속성앞에 this
class Counter extends React.Component {

    increment = (delta) => {
        this.props.changeScore(this.props.id, delta);
    }

    // 리액트 이벤트: 선언형 스타일: 함수 선언문을 우측에 배치
    render() {
        return (
            <div className={styles.counter}>
                <button className={classNames(styles['counter-action'], styles.decrement)}
                        onClick={() => this.increment(-1)}> - </button>
                <span className={styles['counter-score']}>{this.props.score}</span>
                <button className={classNames(styles['counter-action'], styles['increment'])}
                        onClick={() => this.increment(1)}> + </button>
            </div>
        );
    }
}

Counter.propTypes = {
    changeScore: PropTypes.func,
    id: PropTypes.number,
    score: PropTypes.number
}

// 액션을 디스패치하는 펑션을 props 매핑
const mapActionToProps = (dispatch) => ({
    // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는)펑션
    changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

// 커링펑션, HoC
export default connect(null, mapActionToProps)(Counter);