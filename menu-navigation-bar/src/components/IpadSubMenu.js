import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopMenuComponent.css';

class IpadSubMenu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="MenuContainer">
				<div className="Header">
					<Link to={`/ipad/ipadpro`}> iPad Pro </Link>
				</div>
			</div>
		);
	}
}

export default IpadSubMenu;