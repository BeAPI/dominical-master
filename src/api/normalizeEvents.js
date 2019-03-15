import defaultEventGetter from './getEvent';
import validateDate from './validateDate';



export default (rawEvents, getEvent = defaultEventGetter) =>
	rawEvents.map(event => {
		const normalizedEvent = getEvent(event);
		normalizedEvent.date = validateDate(normalizedEvent.date);
		return normalizedEvent;
	});
