function removeClosed(bugs){
	let closedBugs = bugs.filter(bug => bug.isClosed);
	let removeActionObj = { type : 'REMOVE', payload : closedBugs };
	return removeActionObj;
}
export default removeClosed;