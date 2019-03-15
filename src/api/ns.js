import createCssNamespace from 'css-ns';
import {CSS_NAMESPACE} from './constants';



export default createCssNamespace({
	namespace: CSS_NAMESPACE,
	include: /.*/
});
