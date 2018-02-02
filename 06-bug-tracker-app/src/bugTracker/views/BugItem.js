import React from 'react';

let BugItem = ({bug, toggle}) => (
	<li>
		<span className={bug.isClosed ? 'bugname closed' : 'bugname'} 
			onClick={() => toggle(bug)}>{bug.name}</span>
		<div>{bug.isClosed.toString()}</div>
	</li>
);
export default BugItem;