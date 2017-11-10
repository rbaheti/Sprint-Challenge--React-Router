import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopMenuComponent.css';
import image from './sample.png';

class TopMenuComponent extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="MenuContainer">
				<img src={image} alt="AppleDevices" width="500" height="377"/>
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