import "./App.css";
import { Header } from "./components/Header/Header";
import { Router } from "./Router";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Router />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
