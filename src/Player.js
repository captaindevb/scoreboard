import React from 'react';
import Counter from "./Counter";
import PropTypes from 'prop-types';
import {removePlayer} from "./redux/actions";
import {connect} from "react-redux";

import styles from './pages/scoreboard/Scoreboard.module.css';

class Player extends React.PureComponent {
    static price = 1000; // Player.price
    static propTypes = {
        removePlayer: PropTypes.func,
        id: PropTypes.number
    }
    render() {
        const {removePlayer, id, name, score, changeScore} = this.props;
        return (
            <div className={styles.player}>
				<span className={styles['player-name']}>
				{/*3. 콜백 펑션 호출*/}
                    <button className={styles['remove-player']} onClick={() => removePlayer(id)}> X </button>
                    {this.props.children}
                    {name}
				</span>
                <Counter score={score} id={id}/>
            </div>
        )
    }
    /*	shouldComponentUpdate(nextProps, nextState, nextContext) {
            return nextProps.score !== this.props.score ? true : false;
        }*/
}

// 액션을 디스패치하는 펑션을 props 매핑
const mapActionToProps = (dispatch) => ({
    // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는)펑션
    removePlayer: (id) => dispatch(removePlayer(id))
})

// 커링펑션, HoC
export default connect(null, mapActionToProps)(Player);