import React from 'react';
import {addPlayer} from "./redux/actions";
import {connect} from "react-redux";

import styles from './pages/scoreboard/Scoreboard.module.css';

class AddPlayerForm extends React.Component {
    textInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById("form");
        const player = document.getElementById("player");
        console.log(form.checkValidity());
        console.log(player.validity.valid);

        this.props.addPlayer(this.textInput.current.value);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form id="form" className={styles.form} onSubmit={this.handleSubmit} noValidate>
                <input id="player" ref={this.textInput}
                       className={styles.input} type="text" placeholder="enter a player's name"
                       required></input>
                <input className={styles.input} type="submit" value="Add Player"></input>
            </form>
        );
    }
}

// 액션을 디스패치하는 펑션을 props 매핑
const mapActionToProps = (dispatch) => ({
    // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는)펑션
    addPlayer: (name) => dispatch(addPlayer(name))
})

// 커링펑션, HoC
export default connect(null, mapActionToProps)(AddPlayerForm);