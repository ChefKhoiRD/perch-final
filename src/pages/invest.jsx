import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import "./styles/invest.css";

const Invest = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{`Invest | Perch`}</title>
				<meta name="description" />
			</Helmet>

			<div className="page-content">
				<NavBar active="invest" />
				<div className="content-wrapper">
					<div className="invest-logo-container">
						<div className="invest-logo">
							<Logo width={90} />
						</div>
					</div>

					<div className="invest-container">
						<div className="invest-main">
							<div className="invest-right-side">
								<div className="title invest-title">
									Invest in Perch
								</div>

								<div className="subtitle invest-subtitle">
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Hic eveniet quia
									molestiae, nisi doloremque veritatis aliquam
									perferendis mollitia cupiditate inventore
									architecto, animi amet, porro expedita odio
									ex minima tempore perspiciatis?
								</div>

								<button className="invest-button mt-4 btn btn-primary">Invest</button>
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

export default Invest;
