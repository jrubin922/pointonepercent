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
					<div className="message">
						Point One Percent is a giving campaign built on a simple belief:<br />I<b>f many people each commit to a small act of charity, the collective impact can change the world.</b>
					</div>
					<div className="message">{"The small act of donating just one tenth of one percent (0.1%) of your yearly income can make a big difference. It's really just some simple math:"}</div>

					<Container className="formula-container">
						<Row>
				          <Col>
				          	<h1 className="formula-term-title">110M</h1>
				          	<p className="formula-term-subtitle"># of Full-Time Workers in the US</p>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-operator">x</h1>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-title">$47K</h1>
				          	<p className="formula-term-subtitle">Median Income of Full Time Worker</p>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-operator">x</h1>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-title">0.1%</h1>
				          	<p className="formula-term-subtitle">Point One Percent Challenge</p>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-operator">=</h1>
				          </Col>

				          <Col>
				          	<h1 className="formula-term-title">$5,170,000,000</h1>
				          	<p className="formula-term-subtitle">Collective Impact</p>
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
