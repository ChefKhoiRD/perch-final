import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Impact from "./pages/impact";
import Company from "./pages/company";
import Invest from "./pages/invest";
import News from "./pages/news";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import "./app.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/impact" element={<Impact />} />
				<Route path="/company" element={<Company />} />
				<Route path="/news" element={<News />} />
				<Route path="/invest" element={<Invest />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
