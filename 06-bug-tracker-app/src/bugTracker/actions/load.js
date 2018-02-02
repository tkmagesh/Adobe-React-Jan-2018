import axios from 'axios';

function load(){
	return function(dispatch){
		console.log(arguments);
		axios.get('http://localhost:3030/bugs')
			.then(response => dispatch({type : 'INIT', payload : response.data}));
	}
}

export default load;