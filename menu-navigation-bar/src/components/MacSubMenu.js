import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopMenuComponent.css';

class MacSubMenu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="MenuContainer">
				<div className="Header">
					<Link to={`/mac/imacpro`}> iMac Pro </Link>
				</div>
			</div>
		);
	}
}

export default MacSubMenu;