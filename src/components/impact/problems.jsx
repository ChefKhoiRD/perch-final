import React from "react";

import "./style/problems.css";

const Problems = (props) => {
	const { number, title, description } = props;

	return (
		<React.Fragment>
			<div className="problems pt-3 px-3 mt-5 mx-4">
				<div className="problems-left-side">
					<div className="problems-number">{number}</div>
				</div>

				<div className="problems-right-side">
					<div className="problems-title">{title}</div>
					<div className="problems-description">{description}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Problems;
