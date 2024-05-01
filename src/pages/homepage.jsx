import React from "react";
import { Helmet } from "react-helmet";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import Features from "../components/homepage/features";

import INFO from "../data/user";

import "./styles/homepage.css";

const Homepage = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="invest-logo-container">
						<div className="invest-logo">
							<Logo width={90} />
						</div>
					</div>

					<div className="homepage-hero-image p-5 text-center bg-image rounded-3">
						<div className="mask">
							<div className="mt-5 d-flex justify-content-center align-items-center h-100">
								<div className="text-white">
									<h1 className="mb-3">Perch</h1>
									<h3 className="mb-3">
										Revolutionizing the restauarant
										hospitality space
									</h3>
								</div>
							</div>
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-features-container">
							<div className="d-flex justify-content-center align-itmes-center">
								<h3>
									Maximize your business potential with robust
									copilot capabilities
								</h3>
							</div>
							<div className="d-flex justify-content-center">
								<div className="features-content m-4 d-flex justify-content-around flex-wrap">
									{INFO.homepage.features.map(
										(feature, index) => (
											<Features
												key={index}
												photo={feature.photo}
												title={feature.title}
												description={
													feature.description
												}
											/>
										)
									)}
								</div>
							</div>
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

export default Homepage;
