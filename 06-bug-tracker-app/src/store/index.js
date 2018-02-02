import {createStore, combineReducers} from 'redux';

import bugsReducer from '../bugTracker/reducers'
import spinnerReducer from '../spinner/reducers';

let rootReducer = combineReducers({
	bugState : bugsReducer,
	spinnerState : spinnerReducer
});

var appStore = createStore(rootReducer);

export default appStore;