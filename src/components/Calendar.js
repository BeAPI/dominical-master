import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import renderIf from 'render-if';
import ns from '../api/ns';
import {FIRST_DAY_OF_WEEK, DAY_FORMAT} from '../api/constants';
import en from '../locales/en';
import EmbeddedStyles from './EmbeddedStyles';
import Header from './Header';
import Nav from './Nav';
import MonthTable from './MonthTable';
import MonthTableRow from './MonthTableRow';
import DayCell from './DayCell';
import Details from './Details';



export default class Calendar extends Component {
	constructor(props) {
		super(props);
		this.dayDomElements = {};
	}

	getChildContext() {
		return {
			localeStrings: this.props.localeStrings
		};
	}

	focusDay(dayId) {
		if (this.dayDomElements[dayId]) {
			this.dayDomElements[dayId].focus();
		}
	}

	render() {
		const {
			// props that user can directly pass
			month, highlightedDay, skipDetailsWhenPossible, renderDay, renderAccessibleDayText,
			// props built with our container
			eventsByDay, headers, weeks, goBackInTime, goToTheFuture, goToday,
			details, openDetails, closeDetails
		} = this.props;

		const monthInt = month.month();

		return (
			<div className={ns('Container')}>
				<EmbeddedStyles />
				<Header date={month} />

				<Nav
					onPreviousYearClick={() => goBackInTime(1, 'years')}
					onPreviousMonthClick={() => goBackInTime(1, 'months')}
					onNextMonthClick={() => goToTheFuture(1, 'months')}
					onNextYearClick={() => goToTheFuture(1, 'years')}
					onTodayClick={() => goToday()}
				/>

				<div className={ns('MonthTableContainer')}>
					<MonthTable date={month} headers={headers}>
						{weeks.map((week, i) => (
							<MonthTableRow key={`week-${i}`}>
								{week.map((day, j) => {
									const dayId = day && day.format(DAY_FORMAT);
									return (
										<DayCell
											key={`day-${j}`}
											day={day}
											buttonRef={(domEl) => { this.dayDomElements[dayId] = domEl; }}
											events={(day && eventsByDay[dayId]) || []}
											isHighlighted={day && highlightedDay && highlightedDay.isSame(day, 'day')}
											isDetailed={day && details.day && day.isSame(details.day, 'day')}
											isOutsideMonth={!day || day.month() !== monthInt}
											skipDetailsWhenPossible={skipDetailsWhenPossible}
											onDetailsRequest={openDetails}
											renderDay={renderDay}
											renderAccessibleText={renderAccessibleDayText}
										/>
									);
								})}
							</MonthTableRow>
						))}
					</MonthTable>
				</div>

				{renderIf(details.open)(() => (
					<Details
						{...details}
						onCloseRequest={() => {
							closeDetails();
							this.focusDay(details.day.format(DAY_FORMAT));
						}}
					/>
				))}
			</div>
		);
	}
}

Calendar.propTypes = {
	// user props (other props are available but used only in the container; see there for details)
	month: MomentPropTypes.momentObj,
	highlightedDay: MomentPropTypes.momentObj,
	skipDetailsWhenPossible: PropTypes.bool,
	renderDay: PropTypes.func,
	renderAccessibleDayText: PropTypes.bool,
	localeStrings: PropTypes.object,
	// container props
	goBackInTime: PropTypes.func.isRequired,
	goToTheFuture: PropTypes.func.isRequired,
	goToday: PropTypes.func.isRequired,
	headers: PropTypes.array.isRequired,
	weeks: PropTypes.array.isRequired,
	eventsByDay: PropTypes.object
};

Calendar.defaultProps = {
	month: moment(),
	highlightedDay: moment(),
	firstDayOfWeek: FIRST_DAY_OF_WEEK,
	skipDetailsWhenPossible: true,
	enableOutsideDays: false,
	renderDay: null,
	renderAccessibleDayText: true,
	eventsByDay: {},
	localeStrings: en
};

Calendar.childContextTypes = {
	localeStrings: PropTypes.object
};
