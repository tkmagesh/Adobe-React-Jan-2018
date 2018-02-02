import React from 'react';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';
import BugList from './views/BugList';

import bugActionCreators from './actions';

let BugTracker = ({bugs, addNew, toggle, removeClosed }) => (
	<div>
		<BugStats bugs={bugs}/>
		<BugSort />
		<BugEdit addNew={addNew} />
		<BugList {...{bugs, toggle, removeClosed}} />
	</div>
);

function mapStateToProps(appState){
	let bugs = appState.bugState.filter((bug, index) => index % 2 === appState.spinnerState % 2);
	return { bugs };
}

function mapDispatchToProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}

//export default BugTracker;

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);
