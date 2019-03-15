/**
* original code taken from react-dates/src/components/OutsideClickHandler.jsx,
* thanks to them :)
*
* The MIT License (MIT)
*
* Copyright (c) 2016 Airbnb
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';



export default class OutsideClickHandler extends Component {
	constructor(...args) {
		super(...args);

		this.onOutsideClick = this.onOutsideClick.bind(this);
		this.setChildNodeRef = this.setChildNodeRef.bind(this);
	}

	componentDidMount() {
		// `capture` flag is set to true so that a `stopPropagation` in the children
		// will not prevent all outside click handlers from firing - maja
		document.addEventListener('click', this.onOutsideClick, {capture: true});
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.onOutsideClick, {capture: true});
	}

	onOutsideClick(e) {
		const {childNode} = this;
		const isDescendantOfRoot = childNode && childNode.contains(e.target);
		if (!isDescendantOfRoot) {
			this.props.onOutsideClick(e);
		}
	}

	setChildNodeRef(ref) {
		this.childNode = ref;
	}

	render() {
		const {children, onOutsideClick, ...props} = this.props;
		return (
			<div {...props} ref={this.setChildNodeRef}>
				{children}
			</div>
		);
	}
}

OutsideClickHandler.propTypes = {
	children: PropTypes.node,
	onOutsideClick: PropTypes.func.isRequired
};

OutsideClickHandler.defaultProps = {
	children: <span />
};
