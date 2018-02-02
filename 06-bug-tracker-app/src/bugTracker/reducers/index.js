function bugsReducer(currentState = [], action){
	if (action.type === 'INIT'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		return [...currentState, action.payload];
	}
	if (action.type === 'UPDATE'){
		let {old : oldBug, new : newBug} = action.payload;
		return currentState.map(bug => bug === oldBug ? newBug : bug)
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload; 
		return currentState.filter(bug => bug.id !== bugToRemove.id);
	}
	return currentState;
}
export default bugsReducer;