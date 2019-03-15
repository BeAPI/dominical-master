import React from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import {getContext} from 'recompose';
import ns from '../api/ns';
import NavButton from './NavButton';



/**
 *
 */
function Nav({
	onPreviousYearClick, onPreviousMonthClick,
	onNextMonthClick, onNextYearClick,
	onTodayClick, localeStrings
}) {
	return (
		<div className={ns('Nav')}>
			{renderIf(onPreviousYearClick)(() => (
				<NavButton
					type="prevYear"
					onClick={onPreviousYearClick}
					title={localeStrings['Nav.goPrevYearTitle']}
				>
					{localeStrings['Nav.goPrevYearText']}
				</NavButton>
			))}
			{renderIf(onPreviousMonthClick)(() => (
				<NavButton
					type="prevMonth"
					title={localeStrings['Nav.goPrevMonthTitle']}
					onClick={onPreviousMonthClick}
				>
					{localeStrings['Nav.goPrevMonthText']}
				</NavButton>
			))}
			{renderIf(onTodayClick)(() => (
				<NavButton
					type="today"
					title={localeStrings['Nav.goTodayTitle']}
					onClick={onTodayClick}
				>
					{localeStrings['Nav.goTodayText']}
				</NavButton>
			))}
			{renderIf(onNextMonthClick)(() => (
				<NavButton
					type="nextMonth"
					title={localeStrings['Nav.goNextMonthTitle']}
					onClick={onNextMonthClick}
				>
					{localeStrings['Nav.goNextMonthText']}
				</NavButton>
			))}
			{renderIf(onNextYearClick)(() => (
				<NavButton
					type="nextYear"
					title={localeStrings['Nav.goNextYearTitle']}
					onClick={onNextYearClick}
				>
					{localeStrings['Nav.goNextYearText']}
				</NavButton>
			))}
		</div>
	);
}

Nav.propTypes = {
	onPreviousYearClick: PropTypes.func,
	onPreviousMonthClick: PropTypes.func,
	onNextMonthClick: PropTypes.func,
	onNextYearClick: PropTypes.func,
	onTodayClick: PropTypes.func,
	localeStrings: PropTypes.object.isRequired
};

Nav.defaultProps = {
	onPreviousYearClick: null,
	onPreviousMonthClick: null,
	onNextMonthClick: null,
	onNextYearClick: null,
	onTodayClick: null
};

export default getContext({
	localeStrings: PropTypes.object
})(Nav);
