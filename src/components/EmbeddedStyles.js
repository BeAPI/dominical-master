import React from 'react';
import {CSS_NAMESPACE} from '../api/constants';



/**
 *
 */
export default function DefaultStyles() {
	return (
		<style
			dangerouslySetInnerHTML={{__html: `
				.${CSS_NAMESPACE}-u-srOnly {
					border: 0 !important;
					clip: rect(1px, 1px, 1px, 1px) !important;
					-webkit-clip-path: inset(50%) !important;
					clip-path: inset(50%) !important;
					height: 1px !important;
					overflow: hidden !important;
					padding: 0 !important;
					position: absolute !important;
					width: 1px !important;
					white-space: nowrap !important;
				}
			`}}
		/>
	);
}
