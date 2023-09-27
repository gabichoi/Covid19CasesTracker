import papa from "papaparse";
import geoJSONData from "../data/MapData.json";
import LegendEntity from "./LegendEntity";

class CountryEntity {
	constructor(setCountries) {
		this.setCountries = setCountries;
		const CovidCSVdata =
			"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";
		this.parseData(CovidCSVdata);
	}

	// Parse the CSV data using PapaParse library
	parseData = (CovidCSVdata) => {
		papa.parse(CovidCSVdata, {
			download: true,
			header: true,
			complete: this.integrateData,
		});
	};

	// Integrate the parsed CSV Covid-19 data with GeoJSON map data
	integrateData = (result) => {
		const covidCountries = result.data;
		geoJSONData.features.forEach((mapCountry) => {
			const covidCountry = covidCountries.find(
				(covidCountry) => mapCountry.properties.ISO_A3 === covidCountry.ISO3
			);
			this.updateData(mapCountry, covidCountry);
		});
		this.setCountries(geoJSONData.features);
	};

	// Update properties related to cases and colors
	updateData = (mapCountry, covidCountry) => {
		mapCountry.properties.cases = 0;
		mapCountry.properties.confirmedText = "0";
		if (covidCountry != null) {
			const cases = Number(covidCountry.Confirmed);
			mapCountry.properties.cases = cases;
			mapCountry.properties.confirmedText = this.formatNumber(cases);
		}
		this.applyColor(mapCountry);
	};

	// Format large numbers with their corresponding abbreviations
	formatNumber = (number) => {
		if (number >= 1e9) {
			return (number / 1e9).toFixed(2) + "B";
		} else if (number >= 1e6) {
			return (number / 1e6).toFixed(2) + "M";
		} else if (number >= 1e3) {
			return (number / 1e3).toFixed(2) + "K";
		} else {
			return number.toString();
		}
	};

	// Apply color to the map based on the number of cases
	applyColor = (mapCountry) => {
		const legendItem = LegendEntity.LegendEntries.find((legendItem) =>
			legendItem.range(mapCountry.properties.cases)
		);
		if (legendItem != null) {
			mapCountry.properties.color = legendItem.color;
		}
	};
}

export default CountryEntity;
