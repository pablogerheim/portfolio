import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import {Contact} from "./components/Contact/Contact"
function Router() {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Navigate to="/home" />} />
		</Routes>
	);
}

export {Router}