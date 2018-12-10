import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
            handleTakeTheChallengeButton
        } = this.props;

		return (
			<div>
				<NavigationBar />
				<div className="home-page-content">
					<img className="point-one-line" src={"/images/pointoneline.png"} />
					<div className="slogan">{"Small Act. Big Difference."}</div>
					<div className="message">{"Point One Percent is a giving campaign built on a simple belief: if many people each commit to a small act of charity, the collective impact can change the world."}</div>
					<div className="message">{"So what constitutes a small act of charity? Well, at Point One Percent, we believe it’s precisely... 0.1% of your yearly income! Yup, that’s it. Just one tenth of one percent."}</div>
					<div className="message">{"So how can such a small amount make such a big difference? Well, it’s really just some simple math:"}</div>
					<button 
						className="challenge-button"
						type="button"
						onClick={handleTakeTheChallengeButton}>TAKE THE CHALLENGE!</button>
					<img className="line" src={"/images/line.png"} />
				</div>
			</div>
		);
	}
}
