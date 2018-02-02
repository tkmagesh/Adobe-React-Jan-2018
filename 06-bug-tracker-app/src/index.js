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

import spinnerActionCreators from './spinner/actions';
import Spinner from './spinner';


let bugActions = bindActionCreators(bugActionCreators, appStore.dispatch);


let spinnerActions = bindActionCreators(spinnerActionCreators, appStore.dispatch);

function renderApp(){
	let appState = appStore.getState(),
		bugs = appState.bugState,
		spinnerValue = appState.spinnerState;
	console.log(appState);
	
	ReactDOM.render(
			<div>
				<BugTracker {...{bugs, ...bugActions}}/>
				<hr/>
				<Spinner 
					spinnerValue={spinnerValue} 
					increment={spinnerActions.increment}
					decrement={spinnerActions.decrement}
				/>
			</div>,
		document.getElementById('root'));
}
appStore.subscribe(renderApp);
renderApp();
//registerServiceWorker();
