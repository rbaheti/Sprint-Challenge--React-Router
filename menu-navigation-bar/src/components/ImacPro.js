import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopMenuComponent.css';

class ImacPro extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="MenuContainer">
				<div className="Header">
					<h2> iMac Pro is here!!! </h2>
				</div>
			</div>
		);
	}
}

export default ImacPro;