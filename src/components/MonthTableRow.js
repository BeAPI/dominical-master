import React from 'react';
import ns from '../api/ns';



/**
 *
 */
export default function MonthTableRow(props) {
	return (
		<tr className={ns('MonthTable-week')} {...props} />
	);
}
