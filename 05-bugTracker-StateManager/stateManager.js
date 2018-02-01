
var SM = (function(){
	let _currentState = undefined,
		_listenerFns = [],
		_reducer = null,
		_init_action = '@@INIT_ACTION';

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		if (typeof listenerFn === 'function')
			_listenerFns.push(listenerFn);
	}

	function triggerChange(){
		_listenerFns.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		let result = _reducer(_currentState, action);
		if (result === _currentState) return;
		_currentState = result;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = reducer(_currentState, _init_action);
		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		}
	}
	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				var action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}
	return {
		createStore : createStore,
		bindActionCreators : bindActionCreators
	}
})();