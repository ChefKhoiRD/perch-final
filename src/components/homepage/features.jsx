import React from "react";

import "./styles/features.css";

const Features = (props) => {
	const { photo, title, description } = props;
	return (
        <div className="feature-container">
            <div className="feature">
                <img src={photo} className="feature-img-top" alt="feature-logo"/>
                <div className="feature-body">
                    <p className="feature-text features-member-name">{title}</p>
                    <p className="feature-text features-member-position">{description}</p>
                </div>
            </div>
        </div>
	);
};

export default Features;
