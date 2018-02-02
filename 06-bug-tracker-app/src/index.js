import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import appStore from './store';
import BugTracker from './bugTracker';
import Spinner from './spinner';

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<BugTracker />
			<hr/>
			<Spinner />
		</div>
	</Provider>
, document.getElementById('root'));

/*

function renderApp(){
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
renderApp();*/
//registerServiceWorker();
