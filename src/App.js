import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';

export class App extends Component {
	state = {
		data: {},
		country: ''
	};

	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
		// console.log(data);
	}

	handleCountryChange = async (country) => {
		// console.log(country);
		//FETCH THE DATA
		const fetchedData = await fetchData(country);
		// console.log(fetchedData);
		//SET THE STATE
		this.setState({ data: fetchedData, country: country });
	};

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<img src={coronaImage} alt="COVID-19" className={styles.image} />
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
