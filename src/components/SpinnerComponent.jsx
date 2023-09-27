import React from "react";

// This component displays a spinner while the data is loading
const SpinnerComponent = () => {
	const containerStyle = {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div style={containerStyle}>
			<div class="spinner-border text-dark" role="status">
				<span class="sr-only"></span>
			</div>
		</div>
	);
};

export default SpinnerComponent;

