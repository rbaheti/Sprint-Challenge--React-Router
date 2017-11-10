import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import TopMenuComponent from './components/TopMenuComponent';
import MacSubMenu from './components/MacSubMenu';
import IpadSubMenu from './components/IpadSubMenu';
import ImacPro from './components/ImacPro';
import IpadPro from './components/IpadPro';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={TopMenuComponent} />
			<Route exact path="/mac" component={MacSubMenu}/>
			<Route exact path="/ipad" component={IpadSubMenu}/>
			<Route exact path="/mac/imacpro" component={ImacPro}/>
			<Route exact path="/ipad/ipadpro" component={IpadPro}/>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);
