import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import Problems from "../components/impact/problems";
import Solutions from "../components/impact/solutions";

import INFO from "../data/user";

import "./styles/impact.css";

const Impact = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{`impact | Perch`}</title>
				<meta name="description"/>
			</Helmet>

			<div className="page-content">
				<NavBar active="impact" />
				<div className="content-wrapper">
					<div className="impact-logo-container">
						<div className="impact-logo">
							<Logo width={90} />
						</div>
					</div>

					<div className="impact-hero-image p-5 text-center bg-image rounded-3">
                        <div className="mask">
                            <div className="mt-5 d-flex justify-content-center align-items-center h-100">
								<div className="text-white">
									<h3 className="mb-3">
										Our mission is to revolutionize dining experiences by harnessing the power of artificial intelligence. We aim to enhance the interactions and efficiency for both customers and staff, ensuring a seamless, intuitive, and memorable experience.
									</h3>
								</div>
                            </div>
                        </div>
                    </div>

					<div className="problems-container py-4">
						<div className="problems-title">
							<h1 className="mt-5">The problems restauarants face</h1>
						</div>
						<div className="problems-content">
							{INFO.impact.problems.map((problem, index) => (
								<Problems 
									key={index}
									number={problem.number}
									title={problem.title}
									description={problem.description}
								/>
							))}
						</div>
					</div>

					<div className="solutions-container py-5">
						<div className="solutions-title">
							<h1>How we solve these problems</h1>
						</div>
						<div className="solutions-content">
							{INFO.impact.solutions.map((solution, index) => (
								<Solutions 
									key={index}
									title={solution.title}
									description={solution.description}
								/>
							))}
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

export default Impact;
