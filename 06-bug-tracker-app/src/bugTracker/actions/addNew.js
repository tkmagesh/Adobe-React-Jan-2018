function addNew(newBugName){
		let newBug = { name : newBugName, isClosed : false};
		let addNewActionObj = { type : 'ADD_NEW', payload : newBug};
		return addNewActionObj;
}
export default addNew;