import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopMenuComponent.css';

class IpadPro extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="MenuContainer">
				<div className="Header">
					<h2> iPad Pro is here!!! </h2>
				</div>
			</div>
		);
	}
}

export default IpadPro;