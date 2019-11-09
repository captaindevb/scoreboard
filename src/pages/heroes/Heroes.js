import React from 'react';
import api from '../../utils/api';

import './Heroes.scss';

export class Heroes extends React.Component {
	state = {
		heroes: []
	}

	componentDidMount() {
		this.getHeroes();
	}

	// async 를 붙이면 비동기가 된다.
	// async 안에는 반드시 await가 한개이상 있어야 한다.
	// await 뒤에는 반드시 Promise 객체가 와야 한다.
	// await 는 결과가 올때까지 기다렸다가 결과값을 리턴한다.
	async getHeroes() {
		// body.data에 원하는 결과값이 있다.
		const body = await api.get('/api/user/heroes?start_index=0&page_size=5');
		console.log(body.data);
		this.setState({heroes: body.data.data});
	}

	render() {
		return (
			<ul>
				{this.state.heroes.map(hero => {
					return (
					<li key={hero.id} className="row align-items-center m-0">
						<div className="col-1 py-2">
							<img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/face-24px.svg'} alt={hero.name}
									 className="img-fluid rounded-circle" style={{width: '100%'}} />
						</div>
						<span className="col">{hero.name}</span>
					</li>
					)
				})}
			</ul>
		);
	}
}
