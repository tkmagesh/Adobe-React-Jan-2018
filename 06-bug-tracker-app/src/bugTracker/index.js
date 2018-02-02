import React from 'react';

import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';
import BugList from './views/BugList';

let BugTracker = ({bugs, addNew, toggle, removeClosed }) => (
	<div>
		<BugStats bugs={bugs}/>
		<BugSort />
		<BugEdit addNew={addNew} />
		<BugList {...{bugs, toggle, removeClosed}} />
	</div>
);
export default BugTracker;