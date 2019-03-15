import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import renderIf from 'render-if';
import FocusTrap from 'focus-trap-react';
import ns from '../api/ns';
import {shape as eventShape} from '../shapes/event';
import OutsideClickHandler from './OutsideClickHandler';



/**
 *
 */
export default class Details extends Component {
	constructor(props) {
		super(props);
		this.handleEscapeKeypress = this.handleEscapeKeypress.bind(this);
	}

	componentDidMount() {
		const hasEvents = this.props.events.length;
		if (!hasEvents && this.titleDomEl) {
			this.titleDomEl.focus();
		}
		if (hasEvents && this.listDomEl) {
			const firstLink = this.listDomEl.querySelector(`.${ns('Details-itemLink')}`);
			if (firstLink) {
				firstLink.focus();
			}
		}

		document.addEventListener('keydown', this.handleEscapeKeypress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleEscapeKeypress);
	}

	handleEscapeKeypress({key, keyCode}) {
		if (key === 'Escape' || key === 'Esc' || keyCode === 27) {
			this.props.onCloseRequest();
		}
	}

	render() {
		const {day, header, events, onCloseRequest} = this.props;
		const {localeStrings} = this.context;
		const containerLabel = localeStrings['Details.containerLabel'](day);
		const closeButtonLabel = localeStrings['Details.closeButtonLabel']
			&& localeStrings['Details.closeButtonLabel'] !== localeStrings['Details.closeButtonText']
				? localeStrings['Details.closeButtonLabel']
				: null;

		return (
			<FocusTrap
				escapeDeactivates={false}
				clickOutsideDeactivates={false}
				className={ns('Details')}
				role="dialog"
				aria-label={containerLabel}
			>
				<OutsideClickHandler
					onOutsideClick={onCloseRequest}
					className={ns('Details-outsideClickHandler')}
					style={{
						width: '100%',
						height: '100%'
					}}
				>
					<strong
						tabIndex="-1"
						ref={(domEl) => { this.titleDomEl = domEl; }}
						className={ns('Details-title')}
					>
						{header}
					</strong>

					{renderIf(events.length)(() => (
						<ul
							className={ns('Details-list')}
							ref={(domEl) => { this.listDomEl = domEl; }}
						>
							{events.map(({name, href}, i) => (
								<li key={i} className={ns('Details-listItem')}>
									{renderIf(href)(() => (
										<a
											href={href}
											className={ns('Details-itemLink')}
										>
											<span className={ns('Details-itemText')}>{name}</span>
										</a>
									))}
									{renderIf(!href)(() => (
										<span className={ns('Details-itemText')}>{name}</span>
									))}
								</li>
							))}
						</ul>
					))}

					<button
						type="button"
						className={ns('Details-closeButton')}
						onClick={onCloseRequest}
						aria-label={closeButtonLabel}
					>
						<span aria-hidden={!!closeButtonLabel}>
							{localeStrings['Details.closeButtonText']}
						</span>
					</button>
				</OutsideClickHandler>
			</FocusTrap>
		);
	}
}

Details.propTypes = {
	day: MomentPropTypes.momentObj.isRequired,
	header: PropTypes.string.isRequired,
	events: PropTypes.arrayOf(eventShape),
	onCloseRequest: PropTypes.func.isRequired
};

Details.defaultProps = {
	events: []
};

Details.contextTypes = {
	localeStrings: PropTypes.object
};
