import React from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import ns from '../api/ns';



/**
 *
 */
export default function Header({date, format}) {
	const title = date.format(format);

	return (
		<div className={ns('Header')}>
			<strong className={ns('Header-title')}>
				{title}
			</strong>
		</div>
	);
}

Header.propTypes = {
	date: MomentPropTypes.momentObj.isRequired,
	format: PropTypes.string
};

Header.defaultProps = {
	format: 'MMMM YYYY'
};
