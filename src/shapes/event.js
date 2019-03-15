import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';



export const shape = PropTypes.shape({
	name: PropTypes.string,
	href: PropTypes.string,
	date: MomentPropTypes.momentObj
});
