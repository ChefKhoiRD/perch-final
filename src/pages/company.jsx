import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import Team from "../components/company/team";
import INFO from "../data/user";

import "./styles/company.css";

const Company = () => {

	return (
		<React.Fragment>
			<Helmet>
				<title>{`impact | Perch`}</title>
				<meta name="description"/>
			</Helmet>

			<div className="page-content">
				<NavBar active="company" />
				<div className="content-wrapper">
					<div className="company-logo-container">
						<div className="company-logo">
							<Logo width={90} />
						</div>
					</div>
                    
                    <div className="company-hero-image p-5 text-center bg-image rounded-3">
                        <div className="mask">
                            <div className="d-flex justify-content-center align-items-center h-100 mt-4">
                            <div className="text-white">
                                <h1 className="mb-3">Our Mission</h1>
                                <h4 className="mb-3">The most powerful online restauarant reservation service</h4>
                            </div>
                            </div>
                        </div>
                    </div>

					<div className="founders-container pt-5">
						<div className="founders-main">
							<div className="founders-right-side">
								<div className="title">
									Founders
								</div>
							</div>
						</div>

                        <div className="founders-component-container">
                            <Team 
                                photo={INFO.company.team.photo}
                                name={INFO.company.team.name}
                                position={INFO.company.team.position}
                            />
                        </div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Company;
