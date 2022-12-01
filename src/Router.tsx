import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
function Router() {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/session" element={<Home />} />
      <Route path="/*" element={<Navigate to="/home" />} />
		</Routes>
	);
}

export {Router}