/**
 * default event getter to build our internal event object
 *
 * date must be moment-compatible - a moment object or a string matching moment construct
 */
export default ({name, href, date}) => ({
	name,
	href,
	date
});
