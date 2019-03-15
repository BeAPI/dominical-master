import React from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import renderIf from 'render-if';
import {getContext} from 'recompose';
import ns from '../api/ns';
import {shape as eventShape} from '../shapes/event';



/**
 *
 */
function DayCell({
	day, events, onDetailsRequest, skipDetailsWhenPossible, buttonRef, localeStrings,
	isHighlighted, isDetailed, isOutsideMonth, renderDay, renderAccessibleText
}) {
	if (!day) {
		return (
			<td className={ns('DayCell DayCell--empty')} />
		);
	}

	const isDirectLink = skipDetailsWhenPossible && events.length === 1 && events[0].href;
	const requestDetailsView = onDetailsRequest && (
		events.length > 1
		|| (events.length === 1 && !skipDetailsWhenPossible)
		|| (events.length === 1 && skipDetailsWhenPossible && !isDirectLink)
	);

	const dayText = renderDay
		? renderDay({
			day,
			events,
			isHighlighted,
			isDetailed,
			isOutsideMonth,
			requestDetailsView,
			isDirectLink
		})
		: day.format('D');

	const allText = renderAccessibleText
		? (
			<span className={ns('DayCell-text')}>
				<span aria-hidden="true" className={ns('DayCell-visibleText')}>
					{dayText}
				</span>
				<span className={ns('DayCell-accessibleText u-srOnly')}>
					{localeStrings['DayCell.accessibleText'](day, events)}
				</span>
			</span>
		)
		: (
			<span className={ns('DayCell-text')}>
				{dayText}
			</span>
		);

	let contentTitle = '';
	if (requestDetailsView) {
		contentTitle = localeStrings['DayCell.detailsButtonTitle'](day, events);
	}
	if (isDirectLink) {
		contentTitle = localeStrings['DayCell.directLinkTitle'](day, events[0]);
	}

	return (
		<td
			className={ns({
				DayCell: true,
				'DayCell--outside': isOutsideMonth,
				'DayCell--highlighted': isHighlighted,
				'DayCell--detailed': isDetailed,
				'DayCell--withEvents': events.length
			})}
		>
			<div className={ns('DayCell-content')}>
				{renderIf(requestDetailsView)(() => (
					<button
						type="button"
						ref={buttonRef}
						className={ns('DayCell-action DayCell-action--button')}
						onClick={() => onDetailsRequest(day, events)}
						title={contentTitle}
					>
						{allText}
					</button>
				))}

				{renderIf(isDirectLink)(() => (
					<a
						href={events[0].href}
						className={ns('DayCell-action DayCell-action--link')}
						title={contentTitle}
					>
						{allText}
					</a>
				))}

				{renderIf(!requestDetailsView && !isDirectLink)(() => (
					allText
				))}
			</div>
		</td>
	);
}

DayCell.propTypes = {
	day: MomentPropTypes.momentObj,
	events: PropTypes.arrayOf(eventShape),
	onDetailsRequest: PropTypes.func,
	skipDetailsWhenPossible: PropTypes.bool,
	isOutsideMonth: PropTypes.bool,
	isHighlighted: PropTypes.bool,
	isDetailed: PropTypes.bool,
	renderDay: PropTypes.func,
	renderAccessibleText: PropTypes.bool,
	buttonRef: PropTypes.func,
	localeStrings: PropTypes.object.isRequired
};

DayCell.defaultProps = {
	day: null,
	events: [],
	onDetailsRequest: null,
	skipDetailsWhenPossible: true,
	isOutsideMonth: false,
	isHighlighted: false,
	isDetailed: false,
	renderDay: null,
	renderAccessibleText: true,
	buttonRef: null
};

export default getContext({
	localeStrings: PropTypes.object
})(DayCell);
