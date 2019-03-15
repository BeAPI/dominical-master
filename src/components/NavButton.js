import React from 'react';
import ns from '../api/ns';



/**
 *
 */
export default function NavButton({type, ...props}) {
	/* the button is wrapped in a div instead of directly being rendered
	for easier styling in case we want to display the nav buttons as table-cell */
	return (
		<div className={ns(`NavButton ${type ? `NavButton--${type}` : ''}`)}>
			<button className={ns('NavButton-button')} {...props} />
		</div>
	);
}
