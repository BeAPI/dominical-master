export default {
	'Nav.goPrevYearTitle': 'Go back one year',
	'Nav.goPrevMonthTitle': 'Go back one month',
	'Nav.goTodayTitle': 'See current month',
	'Nav.goNextMonthTitle': 'Go forth one month',
	'Nav.goNextYearTitle': 'Go forth one year',
	'Nav.goPrevYearText': '←←',
	'Nav.goPrevMonthText': '←',
	'Nav.goTodayText': 'Today',
	'Nav.goNextMonthText': '→',
	'Nav.goNextYearText': '→→',

	'MonthTable.caption': (month) => (
		`Events in ${month.format('MMMM YYYY')}`
	),

	'DayCell.accessibleText': (day) => (
		`${day.format('dddd, MMMM Do YYYY')}`
	),
	'DayCell.detailsButtonTitle': (day) => (
		`View events taking place ${day.format('dddd, MMMM Do YYYY')}`
	),
	'DayCell.directLinkTitle': (day, event) => (
		`Open webpage describing "${event.name}", taking place ${day.format('dddd, MMMM Do YYYY')}`
	),

	'Details.containerLabel': (day) => (
		`Events of ${day.format('dddd, MMMM Do YYYY')}`
	),
	'Details.closeButtonLabel': 'Back',
	'Details.closeButtonText': 'Back'
};
