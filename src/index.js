import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/index.css';
import App from './component/App';
import MobxTest from './component/MobxTest';
import {Router,Route,hashHistory} from 'react-router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router history={hashHistory}>
    		<Route path="/" component={App}/>
    </Router>
), document.getElementById('root'))
registerServiceWorker();
