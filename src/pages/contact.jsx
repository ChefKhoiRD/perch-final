import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const encode = (data) => {
		Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					"=" +
					encodeURIComponent(data[key])
			)
			.join("&");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("/", {
			method: "Post",
			headers: { "content-type": "aoolication/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", name, email, message }),
		})
			.then(() => {
				alert("Message sent");
			})

			.catch((err) => {
				alert("Error");
			});
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={90} />
						</div>
					</div>

					<div className="contact-container">
						<div className="right-contact-body bg-light">
							<div className="title contact-title">
								Let's Get in Touch
							</div>

							<div className="form-container">
								<form
									netlify="true"
									name="contact"
									onSubmit={handleSubmit}
								>
									{/* Form name input */}
									<div className="name-input">
										<label htmlFor="name" className="name">
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											onChange={(e) =>
												setName(e.target.value)
											}
										/>
									</div>

									{/* Form email input */}
									<div className="email-input">
										<label
											htmlFor="email"
											className="email"
										>
											Email
										</label>
										<input
											type="text"
											id="email"
											name="email"
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</div>

									{/* Form message input */}
									<div className="message-input">
										<label
											htmlFor="message"
											className="message"
										>
											What can I help you with?
										</label>
										<textarea
											type="text"
											id="message"
											name="message"
											rows="12"
											onChange={(e) =>
												setMessage(e.target.value)
											}
										/>
									</div>

									{/* Submit button */}
									<button
										type="submit"
										className="mt-4 btn btn-primary"
									>
										Submit
									</button>
								</form>
							</div>
						</div>

						<div className="left-contact-body">
							<div className="contact-us-title-container">
                                <h1 className="font-weight-bold">Contact Us</h1>
                            </div>

							<div className="contact-us-description pt-5">
                                <h3>Have questions for us?</h3>
                                <h3>Would you like a demo?</h3>
                            </div>

							<div className="contact-us-description pt-5">
                                <h3>We'd love to hear from you</h3>
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

export default Contact;
