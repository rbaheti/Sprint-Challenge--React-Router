import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopMenuComponent.css';

class TopMenuComponent extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="MenuContainer">
				<div className="Header">
					<Link to={`/mac`}> Mac </Link>
					<br/>
					<Link to={`/ipad`}> iPad </Link>
				</div>
			</div>
		);
	}
}

export default TopMenuComponent;