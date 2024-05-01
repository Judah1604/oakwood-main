import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Estates from "./components/Estates/Estates";
import Navbar from "./components/static/Navbar";
import Footer from "./components/static/Footer";
import "./styles/base/common.css";
import BookInspection from "./components/BookInspection/BookInspection";
import About from "./components/About/About";
import MeetOurTeam from "./components/About/MeetOurTeam";
import CEO from "./components/About/CEO";

function App() {
	return (
		<>
			<Router>
			<Navbar />
				<Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/estates" Component={Estates} />
                    <Route path="/about" Component={About} />
                    <Route path="/about/meet-our-team" Component={MeetOurTeam} />
                    <Route path="/about/ceo" Component={CEO} />
                    <Route path="/book-an-inspection" Component={BookInspection} />
                </Routes>
			<Footer />
			</Router>
		</>
	);
}

export default App;
