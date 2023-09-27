import React from "react";

//  This component displays the color scale for Covid-19 cases.
const LegendComponent = ({ legendItems }) => {
	const containerStyle = {
		display: "flex",
		alignItems: "stretch",
		height: "5vh",
	};

	const contentStyle = {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "bold",
		fontsize: "1.5",
	};
	
	return (
		<div style={containerStyle}>
			{legendItems.map((item) => (
				<div
					key={item.title}
					style={{
						...contentStyle,
						backgroundColor: item.color,
						color: item.textColor,
					}}
				>
					<span>{item.title}</span>
				</div>
			))}
		</div>
	);
};

export default LegendComponent;
