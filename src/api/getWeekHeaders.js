import moment from 'moment';



/**
 * get an array of formatted weekdays
 * @param {array} weekdays array of 7 integers corresponding to days
 * @param {string} format format string passed to moment to format each string
 * @return {array} array of 7 strings being the formatted days
 */
export default function getWeekHeaders(weekdays, format) {
	const tempDay = moment();
	return weekdays.map(weekday => {
		tempDay.day(weekday);
		return {
			name: tempDay.format('dddd'),
			abbr: tempDay.format(format)
		};
	});
}
