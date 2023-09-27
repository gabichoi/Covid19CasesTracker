import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ countries }) => {
	const containerStyle = {
		height: "95vh",
		backgroundColor: "#E6F4FF",
	};

	// Define the style for the map's GeoJSON layer
	const contentStyle = {
		color: "black",
		weight: 0.5,
		fillColor: "white",
		fillOpacity: 1,
	};

	// Customize country features and popups
	const countryInfo = (country, layer) => {
		layer.options.fillColor = country.properties.color;
		const name = country.properties.ADMIN;
		const cases = country.properties.confirmedText;

		// Style the popup content information
		const info = `
			<div p style="text-align: center;">
				<b style="font-size: 1em;">${name}</b><br>
    			<b style="font-size: 2em;">${cases}</b><br>
				cumulative cases
			</p></div>
		`;
		layer.bindPopup(info);

		// Change the border style for the clicked country
		layer.on("click", () => {
			layer.setStyle({ weight: 1.5 });
		});

		// Reset the border style back to the default value
		layer.on("popupclose", () => {
			layer.setStyle({ weight: 1 });
		});
	};

	// Render the MapContainer and GeoJSON layer
	return (
		<div>
			<MapContainer
				style={containerStyle}
				zoom={1.5}
				center={[20, 0]}
				scrollWheelZoom={false}
			>
				<GeoJSON
					style={contentStyle}
					data={countries}
					onEachFeature={countryInfo}
				/>
			</MapContainer>
		</div>
	);
};

export default MapComponent;
