import React, { Component } from 'react';

export default class NavigationBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="navigation-bar">
				<img className="navigation-logo" src={"/images/logo.png"} />
			</div>
		);
	}
}
