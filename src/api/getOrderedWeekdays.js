import moment from 'moment';
import {WEEKDAYS} from './constants';



/**
 * return a WEEKDAYS array reordered by a given day
 * @param {int} firstDayOfWeek day to begin the week with (between 0 and 6, 0 being sunday)
 * @return {array} new array of weekdays
 */
export default function getOrderedWeekdays(
	firstDayOfWeek = moment.localeData().firstDayOfWeek()
) {
	for (let i = 0; i < WEEKDAYS.length; i++) {
		const weekday = WEEKDAYS[i];
		if (weekday === firstDayOfWeek && i === 0) {
			return WEEKDAYS;
		}
		if (weekday === firstDayOfWeek) {
			return [
				...WEEKDAYS.slice(i),
				...WEEKDAYS.slice(0, i)
			];
		}
	}
	return WEEKDAYS;
}
