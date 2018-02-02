import axios from 'axios';

function removeClosed(){
	return function(dispatch, getState){
		let closedBugs = getState().bugState.filter(bug => bug.isClosed);
		closedBugs.forEach(closedBug => {
			axios
				.delete(`http://localhost:3030/bugs/${closedBug.id}`)
				.then(response => {
					let removeActionObj = { type : 'REMOVE', payload : closedBug };
					dispatch(removeActionObj);
				})
		});		
	}
}
export default removeClosed;