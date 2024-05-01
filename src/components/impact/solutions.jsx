import React from "react";

import "./style/solutions.css";

const Solutions = (props) => {
	const { title, description } = props;

	return (
		<React.Fragment>
			<div className="solutions pt-3 px-3 mt-5 mx-4">
				<div className="solutions-right-side">
					<div className="solutions-title">{title}</div>
					<div className="solutions-description">{description}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Solutions;
