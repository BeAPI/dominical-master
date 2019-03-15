import groupBy from 'lodash/groupBy';
import {DAY_FORMAT} from './constants';



/**
 * @param {array} events array of normalized events (array of {name, date} objects)
 * @return {object} object of grouped events {YYY-MM-DD: [events]}
 */
export default (events) =>
	groupBy(events, ({date}) =>
		date.format(DAY_FORMAT)
	);
