import PropTypes from "prop-types";
import React from "react";

const Divider = ({ color = "#adc178", direction = "left" }) => {
	let points;
	switch (direction) {
		case "left":
			points = "0,0 100,0 0,100";
			break;
		case "right":
			points = "0,0 100,0 100,100";
			break;
		case "up":
			points = "0,100 50,0 100,100";
			break;
		case "down":
			points = "0,0 50,100 100,0";
			break;
		default:
			points = "0,0 100,0 0,100";
	}

	return (
		<div className="triangle-transition z-10">
			<svg
				width="100%"
				height="100"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				style={{ display: "block" }}
			>
				<title>Divider</title>
				<polygon points={points} fill={color} />
			</svg>
		</div>
	);
};

Divider.propTypes = {
	color: PropTypes.string,
	direction: PropTypes.oneOf(["left", "right", "up", "down"]),
};

export default Divider;
