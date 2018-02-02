import {createStore} from 'redux';

import bugsReducer from '../bugTracker/reducers'

var appStore = createStore(bugsReducer);

export default appStore;