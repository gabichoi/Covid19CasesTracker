import React, { useState, useEffect } from "react";
import SpinnerComponent from "./SpinnerComponent";
import WritingComponent from "./WritingComponent";
import MapComponent from "./MapComponent";
import LegendComponent from "./LegendComponent";
import CountryEntity from "../entities/CountryEntity";
import LegendEntity from "../entities/LegendEntity";

const Main = () => {
	const [countries, setCountries] = useState([]);
	const reversedLegend = [...LegendEntity.LegendEntries].reverse();

	// Create an instance of LoadCountries and pass setCountries as the callback
	useEffect(() => {
		new CountryEntity(setCountries);
	}, []);

	const containerStyle = {
		display: "flex",
		height: "100%",
		alignItems: "stretch",
	};

	return (
		<div>
			{countries.length === 0 ? (
				<SpinnerComponent />
			) : (
				<div style={containerStyle}>
					<div style={{ flex: "8", width: "80%" }}>
						<MapComponent countries={countries} />
						<LegendComponent legendItems={reversedLegend} />
					</div>
					<div style={{ flex: "2", width: "20%" }}>
						<WritingComponent />
					</div>
				</div>
			)}
		</div>
	);
};

export default Main;
