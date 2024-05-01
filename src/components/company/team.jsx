import React from "react";

import "./styles/team.css";

const Team = (props) => {
	const { photo, name, position } = props;
	return (
        <div className="card-container">
            <div className="card">
                <img src={photo} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text team-member-name">{name}</p>
                    <p className="card-text team-member-position">{position}</p>
                </div>
            </div>
        </div>
	);
};

export default Team;
