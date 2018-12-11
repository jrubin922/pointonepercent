import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'
import { Container, Row, Col } from 'reactstrap';

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
					<div className="message">{"So what constitutes a small act of charity? Well, at Point One Percent, we believe it’s precisely... 0.1% of your yearly income! Yup, that’s it."}</div>
					<div className="message">{"So how can such just one tenth of one percent of your income make such a big difference? Well, it’s really just some simple math:"}</div>

					<Container className="formula-container">
						<Row>
				          <Col>
				          	<h1 className="formula-term-title">130M</h1>
				          	<p className="formula-term-subtitle">Full-Time Workers in the US</p>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-operator">x</h1>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-title">$50K</h1>
				          	<p className="formula-term-subtitle">Median Income</p>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-operator">x</h1>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-title">0.1%</h1>
				          	<p className="formula-term-subtitle">Challenge</p>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-operator">=</h1>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-title">$650,000,000,000</h1>
				          </Col>
				        </Row>
					</Container>

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
