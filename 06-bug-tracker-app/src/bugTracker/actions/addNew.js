import axios from 'axios';

function addNew(newBugName){
	return function(dispatch){	
		let newBug = { id : 0, name : newBugName, isClosed : false};
		axios
			.post('http://localhost:3030/bugs', newBug)
			.then(response => dispatch({ type : 'ADD_NEW', payload : response.data}));
	}
}
export default addNew;