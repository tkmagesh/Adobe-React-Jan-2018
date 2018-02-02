import React from 'react';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import spinnerActionCreators from './actions';

let Spinner = ({spinnerValue, increment, decrement}) => (
	<div>
		<input type="button" value="Decrement" onClick={decrement}/>
		<span> [{spinnerValue}] </span>
		<input type="button" value="Increment" onClick={increment}/>
	</div>
);

function mapStateToProps(appState){
	let spinnerValue = appState.spinnerState;
	return {spinnerValue : spinnerValue};
}

function mapDispatchToProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}
export default connect(mapStateToProps, mapDispatchToProps)(Spinner);