import React from 'react';
import styles from './Scoreboard.module.css';
import Header from "../../Header";
import {CustomPlayer} from "../../CustomPlayer";
import AddPlayerForm from "../../AddPlayerForm";
import {connect} from "react-redux";

class Scoreboard extends React.Component {
	getHighScore() {
		let max = 0;
		this.props.players.forEach(player => {
			if (player.score > max) {
				max = player.score;
			}
		});
		return max;
	}

	render() {
		return (
			<div className={styles.scoreboard}>
				<Header />
				{
					this.props.players.map((player) => {
						return (
							<CustomPlayer name={player.name} score={player.score} id={player.id} key={player.id}
														isHighscore={player.score === this.getHighScore()}/>
						)
					})
				}
				<AddPlayerForm></AddPlayerForm>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	// 왼쪽은 props, 오른쪽이 store state
	players: state.playerReducer.players
})

export default connect(mapStateToProps)(Scoreboard);
