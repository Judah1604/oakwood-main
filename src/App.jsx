import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Estates from "./components/Estates/Estates";
import Navbar from "./components/static/Navbar";
import Footer from "./components/static/Footer";
import "./styles/base/common.css";
import BookInspection from "./components/BookInspection/BookInspection";
import About from "./components/About/About";

function App() {
	return (
		<>
			<Router>
			<Navbar />
				<Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/estates" Component={Estates} />
                    <Route path="/about" Component={About} />
                    <Route path="/book-an-inspection" Component={BookInspection} />
                </Routes>
			<Footer />
			</Router>
		</>
	);
}

export default App;
