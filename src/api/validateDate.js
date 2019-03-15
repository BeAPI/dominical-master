import moment from 'moment';



export default (date) => {
	const momentObject = moment(date);
	if (!momentObject.isValid()) {
		throw Error(`The event date must be compatible with moment (${date} given).`);
	}
	return momentObject;
};
