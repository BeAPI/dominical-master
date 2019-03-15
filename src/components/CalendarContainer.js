import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import {compose, setPropTypes, defaultProps, withProps, withStateHandlers} from 'recompose';
import {FIRST_DAY_OF_WEEK} from '../api/constants';
import getMonthWeeks from '../api/getMonthWeeks';
import getOrderedWeekdays from '../api/getOrderedWeekdays';
import getWeekHeaders from '../api/getWeekHeaders';
import normalizeEvents from '../api/normalizeEvents';
import defaultEventGetter from '../api/getEvent';
import groupEventsByDay from '../api/groupEventsByDay';
import {shape as dayShape} from '../shapes/day';
import Calendar from './Calendar';



const formatDate = (date) =>
	date && !moment.isMoment(date) ? moment(date) : date;

const dispatchMonthChange = (newValue, callback) => {
	if (callback) {
		callback(newValue);
	}
	return newValue;
};

/**
 *
 */
export default compose(
	defaultProps({
		month: moment(),
		highlightedDay: moment(),
		firstDayOfWeek: FIRST_DAY_OF_WEEK,
		enableOutsideDays: false,
		headerFormat: 'ddd',
		detailsHeaderFormat: 'dddd Do MMMM YYYY',
		onMonthChange: null,
		events: [],
		getEvent: defaultEventGetter
	}),

	withProps(({month, highlightedDay, events, getEvent}) => ({
		// first make sure passed dates end to be moment objects in case we pass strings
		month: formatDate(month),
		highlightedDay: formatDate(highlightedDay),
		// parse given events
		eventsByDay: groupEventsByDay(normalizeEvents(events, getEvent))
	})),

	// create our component state here
	//
	// - transform the `month` prop in a "state prop" to let the component change its value easily
	//   we let the outside world knows that the month changes with dispatchMonthChange
	// - have an internal state for the details view management
	withStateHandlers(
		({month}) => ({
			month,
			details: {
				open: false,
				day: null,
				events: []
			}
		}), {
			goBackInTime: ({month}, {onMonthChange}) => (...args) => ({
				month: dispatchMonthChange(month.clone().subtract(...args), onMonthChange)
			}),
			goToTheFuture: ({month}, {onMonthChange}) => (...args) => ({
				month: dispatchMonthChange(month.clone().add(...args), onMonthChange)
			}),
			goToday: (stateProps, {onMonthChange}) => () => ({
				month: dispatchMonthChange(moment(), onMonthChange)
			}),

			openDetails: (stateProps, {detailsHeaderFormat}) => (day, events) => ({
				details: {
					open: true,
					header: moment(day).format(detailsHeaderFormat),
					day,
					events
				}
			}),
			closeDetails: () => () => ({
				details: {
					open: false,
					header: '',
					day: null,
					events: []
				}
			})
		}
	),

	// build necessary props for the month table
	// this is done after the withStateHandlers call, so that weeks and headers are updated
	// when the month "state" changes
	withProps(({month, firstDayOfWeek, enableOutsideDays, headerFormat}) => ({
		weeks: getMonthWeeks(month, enableOutsideDays, firstDayOfWeek),
		headers: getWeekHeaders(getOrderedWeekdays(firstDayOfWeek), headerFormat)
	})),

	// set proptypes for stuff used only in the container
	setPropTypes({
		month: PropTypes.oneOfType([MomentPropTypes.momentObj, MomentPropTypes.momentString]),
		highlightedDay: PropTypes.oneOfType([MomentPropTypes.momentObj, MomentPropTypes.momentString]),
		firstDayOfWeek: dayShape,
		enableOutsideDays: PropTypes.bool,
		headerFormat: PropTypes.string,
		detailsHeaderFormat: PropTypes.string,
		onMonthChange: PropTypes.func,
		events: PropTypes.array,
		getEvent: PropTypes.func
	})
)(Calendar);
