import React from "react";

const WritingComponent = () => {
	const containerStyle = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		minHeight: "100vh",
		backgroundColor: "#D6EAFA",
	};

	const contentStyle = {
		padding: "20px",
		width: "100%",
		height: "100%",
		alignItems: "stretch",
		overflowY: "auto",
	};

	return (
		<div style={containerStyle}>
			<div style={contentStyle}>
				<h1>
					Cumulative<br></br>Confirmed <br></br>COVID-19 <br></br>Cases<br></br>
				</h1>
				<br />
				<p>
					This page provides a record of cumulative confirmed Covid-19 cases
					spanning from January 2020 to March 2023.
				</p>
				<p>
					The data is sourced from the reputable Johns Hopkins' Coronavirus
					Resource Center.
				</p>
				<p>
					The objective of this project is to not only provide the number but
					also to offer an intuitive visual representation of the pandemic's
					impact, magnitude and trend.
				</p>
				<p>
					The map uses shades of red for a color-coded scheme. Click on
					countries for specific case numbers.
				</p>
				<p>
					Please note that this page is no longer being updated, but will remain
					available for reference.
				</p>
			</div>
		</div>
	);
};

export default WritingComponent;
