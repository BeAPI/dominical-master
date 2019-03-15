import React from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import {getContext} from 'recompose';
import ns from '../api/ns';



/**
 *
 */
function MonthTable({date, headers, children, localeStrings}) {
	const caption = localeStrings['MonthTable.caption'](date);
	return (
		<table className={ns('MonthTable')}>
			<caption className={ns('MonthTable-caption')}>
				<span className={ns('u-srOnly')}>
					{caption}
				</span>
			</caption>
			<thead>
				<tr className={ns('MonthTable-headerRow')}>
					{headers.map(({name, abbr}) => (
						<th
							key={`header-${name}`}
							className={ns('MonthTable-header')}
							scope="col"
						>
							<abbr title={name}>{abbr}</abbr>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{children}
			</tbody>
		</table>
	);
}

MonthTable.propTypes = {
	date: MomentPropTypes.momentObj.isRequired,
	headers: PropTypes.array.isRequired,
	localeStrings: PropTypes.object.isRequired,
	children: PropTypes.node
};

MonthTable.defaultProps = {
	children: null
};

export default getContext({
	localeStrings: PropTypes.object
})(MonthTable);
