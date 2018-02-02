function toggle(bugToToggle){
	let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
	let toggleActionObj = { type : 'UPDATE', payload : {
		old : bugToToggle,
		new : toggledBug
	}};
	return toggleActionObj;
}
export default toggle;