import React from 'react';

let Spinner = ({spinnerValue, increment, decrement}) => (
	<div>
		<input type="button" value="Decrement" onClick={decrement}/>
		<span> [{spinnerValue}] </span>
		<input type="button" value="Increment" onClick={increment}/>
	</div>
);
export default Spinner;