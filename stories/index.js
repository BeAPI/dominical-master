import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import Calendar from '../src/index';



function rand(min, max) {
	return Math.random() * (max - min) + min;
}

class CalendarWithEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [
				{
					"name": "Boone Barton Mcmillan Hammond",
					"date": "2017-06-02",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Tiffany Barnes Santana Sheppard",
					"date": "2017-04-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Florence Franco Aimee Soto",
					"date": "2017-07-09",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Bailey Ortega Diane Patton",
					"date": "2016-06-08",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Underwood Dotson Lydia Conway",
					"date": "2017-09-08",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Ballard Sharpe Beverly Barlow",
					"date": "2016-03-04",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Harding Holman Molly Parks",
					"date": "2017-04-01",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Griffith Dalton Mills Baker",
					"date": "2017-03-08",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Dean Alexander Rosalie Nguyen",
					"date": "2017-08-04",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Melva Hampton Mercedes Bradshaw",
					"date": "2016-05-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Eugenia Mills Black Alvarez",
					"date": "2017-08-09",
					"href": "http://manu.habite.la"
				},
				{
					"name": "William Peck Opal Rosario",
					"date": "2017-07-05",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Harriet Osborn Ashlee Pratt",
					"date": "2016-06-09",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Teresa Schmidt Turner Drake",
					"date": "2017-05-07",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Jordan Fleming Dale Bartlett",
					"date": "2017-04-03",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Keri Higgins Alice Rosa",
					"date": "2017-02-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Ashley Adkins Cathy Prince",
					"date": "2016-02-05",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Langley Robbins Koch Goodwin",
					"date": "2017-09-04",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Nelda Tillman Elsa Kirkland",
					"date": "2016-03-02",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Bianca Lowery Beasley Mercado",
					"date": "2017-08-02",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Santos Avila Perry Gibbs",
					"date": "2017-07-01",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Torres Fox Townsend Byers",
					"date": "2016-03-03",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Melanie Herman Gates Allen",
					"date": "2017-03-04",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Cline Cummings Josefina French",
					"date": "2017-08-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Blanche Rogers Dickson Green",
					"date": "2017-09-08",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Janna Page Stone Wall",
					"date": "2017-04-04",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Harper Edwards Isabel Buckley",
					"date": "2016-06-03",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Juliana Oneal Tracie Mckinney",
					"date": "2016-02-05",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Sheena Whitaker Lambert Carey",
					"date": "2017-03-08",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Delia Mccormick Thompson Bowman",
					"date": "2016-03-07",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Sandoval Ochoa Good Gamble",
					"date": "2017-07-02",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Hensley Dillon Meadows Ayers",
					"date": "2017-02-09",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Deloris Waller Grant Benjamin",
					"date": "2017-09-09",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Mallory Mckay Sofia Martin",
					"date": "2016-03-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Case Rocha Long Hoffman",
					"date": "2016-02-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Mai Savage Chen Martinez",
					"date": "2017-07-08",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Martin Greene Myers Carney",
					"date": "2017-08-04",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Mildred Young April Holloway",
					"date": "2017-05-07",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Sara Hurst Lou Beach",
					"date": "2016-03-08",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Gregory May Savage Lester",
					"date": "2016-02-01",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Ericka Moses Brandie Keith",
					"date": "2016-04-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Genevieve Pickett Amparo Ingram",
					"date": "2016-02-09",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Mona Baird Ward Sellers",
					"date": "2017-01-03",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Eleanor Moreno Houston Sampson",
					"date": "2016-09-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Carmella Massey Tamera Romero",
					"date": "2016-07-05",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Davenport Newton Miller Hogan",
					"date": "2016-09-05",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Shaw Boyd Ursula Bass",
					"date": "2017-05-04",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Ivy Morrison Kerry Barber",
					"date": "2017-05-01",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Kirk Mcdowell Beulah Hester",
					"date": "2017-09-04",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Lucy Hayes Mckinney Howard",
					"date": "2017-07-08",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Booth Dudley Grace Vaughn",
					"date": "2016-02-04",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Rena Rivers Taylor Forbes",
					"date": "2016-01-09",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Helena Simmons Donaldson Sanders",
					"date": "2017-03-02",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Shields Kennedy Horton Conrad",
					"date": "2016-05-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "James Sparks Wolf Odonnell",
					"date": "2017-05-09",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Keisha Ross Anthony Klein",
					"date": "2016-02-07",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Berg Banks Willie Shaffer",
					"date": "2016-08-07",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Hines Fischer Jessica Moran",
					"date": "2017-09-02",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Patti Nieves Faye Roberson",
					"date": "2016-08-07",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Monroe Stephenson Leblanc Baxter",
					"date": "2016-01-03",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Janet Leach Kendra Michael",
					"date": "2016-06-06",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Caitlin Barry Benita Vazquez",
					"date": "2017-09-01",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Walton Holder Bertha Fry",
					"date": "2016-08-01",
					"href": "http://manu.habite.la"
				},
				{
					"name": "Marcy Spence Franklin Houston",
					"date": "2017-03-03",
					"href": "http://manu.habite.la"
				}
			]
		};
		this.originalEvents = this.state.events;
	}

	randomEvents() {
		const begin = rand(0, 40);
		const end = rand(begin + 1, begin + 20);
		this.setState({
			events: this.originalEvents.slice(begin, end)
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.randomEvents.bind(this)}>Update events</button>
				<Calendar
					month="2017-05-05"
					firstDayOfWeek={1}
					events={this.state.events}
					onMonthChange={(month) => {
						console.log('month', month.format('M'));
					}}
				/>
			</div>
		);
	}
}

storiesOf('Calendar', module)
	.add('Dev', () => <CalendarWithEvents />);
