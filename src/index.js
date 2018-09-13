import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import ProjectRouter from './router/Router'


ReactDOM.render(<ProjectRouter />, document.getElementById('root'))
registerServiceWorker();
