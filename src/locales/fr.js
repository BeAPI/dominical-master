export default {
	'Nav.goPrevYearTitle': 'Aller en arrière d\'un an',
	'Nav.goPrevMonthTitle': 'Aller en arrière d\'un mois',
	'Nav.goTodayTitle': 'Voir le mois en cours',
	'Nav.goNextMonthTitle': 'Aller en avant d\'un mois',
	'Nav.goNextYearTitle': 'Aller en avant d\'un an',
	'Nav.goPrevYearText': '←←',
	'Nav.goPrevMonthText': '←',
	'Nav.goTodayText': 'Aujourd\'hui',
	'Nav.goNextMonthText': '→',
	'Nav.goNextYearText': '→→',

	'MonthTable.caption': (month) => (
		`Événements en ${month.format('MMMM YYYY')}`
	),

	'DayCell.accessibleText': (day) => (
		`${day.format('dddd Do MMMM YYYY')}`
	),
	'DayCell.detailsButtonTitle': (day) => (
		`Voir les événements ayant lieu le ${day.format('dddd Do MMMM YYYY')}`
	),
	'DayCell.directLinkTitle': (day, event) => (
		`Ouvrir la page décrivant "${event.name}", événement ayant lieu le ${day.format('dddd Do MMMM YYYY')}`
	),

	'Details.containerLabel': (day) => (
		`Événements du ${day.format('dddd Do MMMM YYYY')}`
	),
	'Details.closeButtonLabel': 'Retour',
	'Details.closeButtonText': 'Retour'
};
