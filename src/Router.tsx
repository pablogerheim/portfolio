import { Routes, Route, Navigate } from "react-router-dom";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { Services } from "./components/Services/Sercives";
import {Contact} from "./components/Contact/Contact"
function Router() {
	return (
		<Routes>
			<Route path="/about" element={<About />} />
			<Route path="/home" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/services" element={<Services />} />
			<Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Navigate to="/home" />} />
		</Routes>
	);
}

export {Router}