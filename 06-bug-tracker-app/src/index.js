import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

import appStore from './store';
import bugActionCreators from './bugTracker/actions';
import BugTracker from './bugTracker';

let bugActions = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderApp(){
	let bugs = appStore.getState();
	ReactDOM.render(
			<BugTracker {...{bugs, ...bugActions}}/>,
		document.getElementById('root'));
}
appStore.subscribe(renderApp);
renderApp();
//registerServiceWorker();
